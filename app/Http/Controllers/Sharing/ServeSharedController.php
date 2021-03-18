<?php

namespace App\Http\Controllers\Sharing;

use App\Http\Controllers\Controller;
use App\Http\Requests\Share\AuthenticateShareRequest;
use App\Http\Resources\ShareResource;
use App\Models\Share;
use App\Models\Setting;
use App\Services\HelperService;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Models\Folder;
use App\Models\File;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class ServeSharedController extends Controller
{
    private $helper;

    public function __construct()
    {
        $this->helper = resolve(HelperService::class);
    }

    /**
     * Show page index and delete access_token & shared_token cookie
     *
     * @param Share $shared
     * @return \Illuminate\Http\Response
     */
    public function index(Share $shared)
    {
        // Delete old access_token if exist
        Cookie::queue('shared_access_token', '', -1);

        // Set cookies
        if ($shared->is_protected) {

            // Set shared token
            Cookie::queue('shared_token', $shared->token, 43200);
        }

        // Check if shared is image file and then show it
        if ($shared->type === 'file' && !$shared->is_protected) {

            $image = File::whereUserId($shared->user_id)
                ->whereType('image')
                ->whereId($shared->item_id)
                ->firstOrFail();

            // Store user download size
            $shared
                ->user
                ->record_download(
                    (int)$image->getRawOriginal('filesize')
                );

            return $this->show_image($image, $shared->user_id);
        }


        return view("index")
            ->with('settings', get_settings_in_json() ?? null);
    }

    /**
     * Get image from storage and show it
     *
     * @param $file
     * @param $user_id
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    private function show_image($file, $user_id)
    {
        // Format pretty filename
        $file_pretty_name = $file->name . '.' . $file->mimetype;

        // Get file path
        $path = "/files/$user_id/$file->basename";

        // Check if file exist
        if (!Storage::exists($path)) abort(404);

        return Storage::response($path, $file_pretty_name, [
            "Content-Type"   => Storage::mimeType($path),
            "Content-Length" => Storage::size($path),
            "Accept-Ranges"  => "bytes",
            "Content-Range"  => "bytes 0-600/" . Storage::size($path),
        ]);
    }

    /**
     * Check Password for protected item
     *
     * @param AuthenticateShareRequest $request
     * @param Share $shared
     * @return array
     */
    public function authenticate(AuthenticateShareRequest $request, Share $shared)
    {
        // Check password
        if (!Hash::check($request->password, $shared->password)) {

            abort(401, __('vuefilemanager.incorrect_password'));
        }

        // Get owner of shared content
        $user = User::find($shared->user_id);

        // Define scope
        $scope = !is_null($shared->permission) ? $shared->permission : 'visitor';

        // Generate token for visitor/editor
        $access_token = $user->createToken('shared_access_token', [$scope])->accessToken;

        // Return authorize token with shared options
        return response(new ShareResource($shared), 200)
            ->cookie('shared_token', $shared->token, 43200)
            ->cookie('shared_access_token', $access_token, 43200);
    }

    /**
     * Browse private folders
     *
     * @param Request $request
     * @param $id
     * @return Collection
     */
    public function get_private_folders(Request $request, $id)
    {
        // Get sharing record
        $shared = Share::where('token', $request->cookie('shared_token'))->firstOrFail();

        // Check if user can get directory
        $this->helper->check_item_access($id, $shared);

        // Collect folders and files to single array
        return collect(
            $this->helper->get_items_under_shared_by_folder_id($id, $shared)
        )->collapse();
    }

    /**
     * Get shared public file record
     *
     * @param Share $shared
     * @return mixed
     */
    public function file_public(Share $shared)
    {
        // Abort if file is protected
        if ($shared->is_protected) {
            abort(403, "Sorry, you don't have permission");
        }

        // Get file
        $file = File::where('user_id', $shared->user_id)
            ->where('id', $shared->item_id)
            ->firstOrFail(['name', 'basename', 'thumbnail', 'type', 'filesize', 'mimetype']);

        // Set urls
        $file->setPublicUrl($shared->token);

        // Return record
        return $file;
    }

    /**
     * Get shared private file record
     *
     * @return mixed
     */
    public function file_private(Request $request)
    {
        // Get sharing record
        $shared = Share::where('token', $request->cookie('shared_token'))
            ->firstOrFail();

        // Return record
        return File::where('user_id', $shared->user_id)
            ->where('id', $shared->item_id)
            ->firstOrFail(['name', 'basename', 'thumbnail', 'type', 'filesize', 'mimetype']);
    }

    /**
     * Get navigation tree
     *
     * @param Request $request
     * @return array
     */
    public function get_private_navigation_tree(Request $request)
    {
        // Get sharing record
        $shared = get_shared($request->cookie('shared_token'));

        // Check if user can get directory
        $this->helper->check_item_access($shared->item_id, $shared);

        // Get folders
        $folders = Folder::with('folders:id,parent_id,id,name')
            ->where('parent_id', $shared->item_id)
            ->where('user_id', $shared->user_id)
            ->sortable()
            ->get(['id', 'parent_id', 'id', 'name']);

        // Return folder tree
        return [
            [
                'id'       => $shared->item_id,
                'name'     => __('vuefilemanager.home'),
                'location' => 'public',
                'folders'  => $folders,
            ]
        ];
    }

    /**
     * Search private files
     *
     * @param Request $request
     * @param $token
     * @return Collection
     */
    public function search_private(Request $request)
    {
        // Get shared
        $shared = get_shared($request->cookie('shared_token'));

        // Search files id db
        $searched_files = File::search($request->input('query'))
            ->where('user_id', $shared->user_id)
            ->get();

        $searched_folders = Folder::search($request->input('query'))
            ->where('user_id', $shared->user_id)
            ->get();

        // Get all children content
        $foldersIds = Folder::with('folders:id,parent_id,id,name')
            ->where('user_id', $shared->user_id)
            ->where('parent_id', $shared->item_id)
            ->get();

        // Get accessible folders
        $accessible_folder_ids = Arr::flatten([filter_folders_ids($foldersIds), $shared->item_id]);

        // Filter files to only accessible files
        $files = $searched_files->filter(function ($file) use ($accessible_folder_ids) {
            return in_array($file->folder_id, $accessible_folder_ids);
        });

        // Filter folders to only accessible folders
        $folders = $searched_folders->filter(function ($folder) use ($accessible_folder_ids) {
            return in_array($folder->id, $accessible_folder_ids);
        });

        // Collect folders and files to single array
        return collect([$folders, $files])->collapse();
    }
}