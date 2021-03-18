<?php

namespace App\Services;

use App;
use App\Models\Share;
use App\Models\File;
use App\Models\Folder;
use App\Http\Requests\FileFunctions\RenameItemRequest;
use App\Models\User;
use ByteUnits\Metric;
use Carbon\Carbon;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;


class DemoService
{
    /**
     * Create new directory
     *
     * @param $request
     * @return array
     * @throws \Exception
     */
    function create_folder($request)
    {
        // Get variables
        $user_scope = $request->user() ? $request->user()->token()->scopes[0] : 'editor';
        $name = $request->has('name') ? $request->input('name') : 'New Folder';

        return [
            'user_id'    => 1,
            'id'         => Str::uuid(),
            'parent_id'  => random_int(1000, 9999),
            'name'       => $name,
            'type'       => 'folder',
            'user_scope' => $user_scope,
            'items'      => '0',
            'color' => isset($request->icon['color']) ? $request->icon['color'] : null,
            'emoji' => isset($request->icon['emoji']) ? $request->icon['emoji'] : null,
            'updated_at' => Carbon::now()->format('j M Y \a\t H:i'),
            'created_at' => Carbon::now()->format('j M Y \a\t H:i'),
        ];
    }

    /**
     * Rename item name
     *
     * @param RenameItemRequest $request
     * @param $id
     * @return mixed
     */
    function rename_item($request, $id)
    {
        // Get item
        if ($request->type === 'folder') {

            $item = Folder::where('id', $id)
                ->where('user_id', 1)
                ->first();

        } else {

            $item = File::where('id', $id)
                ->where('user_id', 1)
                ->first();
        }

        if ($item) {
            $item->name = $request->name;
            $item->emoji = $request->icon['emoji'] ?? null;
            $item->color = $request->icon['color'] ?? null;

            return $item;

        } else {

            return [
                'id'   => $request->id,
                'name' => $request->name,
                'type' => $request->type,
            ];
        }
    }

    /**
     * Upload file
     *
     * @param $request
     * @return array
     * @throws \Exception
     */
    function upload($request)
    {
        // Get user data
        $user_scope = $request->user() ? $request->user()->token()->scopes[0] : 'editor';

        // File
        $file = $request->file('file');
        $filename = Str::random() . '-' . str_replace(' ', '', $file->getClientOriginalName());
        $thumbnail = null;
        $filesize = $file->getSize();
        $filetype = get_file_type($file->getMimeType());

        return [
            'id'         => Str::uuid(),
            'folder_id'  => $request->parent_id,
            'thumbnail'  => 'data:' . $request->file('file')->getMimeType() . ';base64, ' . base64_encode(file_get_contents($request->file('file'))),
            'name'       => $file->getClientOriginalName(),
            'basename'   => $filename,
            'mimetype'   => $file->getClientOriginalExtension(),
            'filesize'   => Metric::bytes($filesize)->format(),
            'type'       => $filetype,
            'file_url'   => 'https://vuefilemanager.hi5ve.digital/assets/vue-file-manager-preview.jpg',
            'user_scope' => $user_scope,
            'created_at' => Carbon::now()->format('j M Y \a\t H:i'),
            'updated_at' => Carbon::now()->format('j M Y \a\t H:i'),
        ];
    }

    /**
     * Return 204 status
     *
     * @return ResponseFactory|\Illuminate\Http\Response
     */
    function response_with_no_content()
    {
        return response('Done!', 204);
    }

    /**
     * Return 204 status
     *
     * @return ResponseFactory|\Illuminate\Http\Response
     */
    function favourites($user)
    {
        return $user->favouriteFolders->makeHidden(['pivot']);
    }
}