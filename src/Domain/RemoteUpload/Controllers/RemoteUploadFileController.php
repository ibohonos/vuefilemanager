<?php
namespace Domain\RemoteUpload\Controllers;

use Illuminate\Http\JsonResponse;
use Domain\Sharing\Models\Share;
use Domain\Folders\Models\Folder;
use App\Http\Controllers\Controller;
use Domain\RemoteUpload\Requests\RemoteUploadRequest;
use Domain\RemoteUpload\Actions\GetContentFromExternalSource;

class RemoteUploadFileController extends Controller
{
    public function __construct(
        public GetContentFromExternalSource $getContentFromExternalSource,
    ) {
    }

    public function __invoke(RemoteUploadRequest $request, ?Share $shared = null): JsonResponse
    {
        $successMessage = [
            'type'    => 'success',
            'message' => 'Files was successfully uploaded.',
        ];

        if (is_demo_account()) {
            return response()->json($successMessage);
        }

        // Get user
        $user = $request->filled('parent_id')
            ? Folder::find($request->input('parent_id'))
                ->getLatestParent()
                ->user
            : auth()->user();

        // If it isn't broadcasting, download files immediately in the request
        if (isNotBroadcasting()) {
            ($this->getContentFromExternalSource)($request->all(), $user);

            return response()->json($successMessage, 201);
        }

        // Add links to the upload queue
        ($this->getContentFromExternalSource)
            ->onQueue()
            ->execute($request->all(), $user);

        return response()->json([
            'type'    => 'success',
            'message' => 'Files were successfully added to the upload queue.',
        ], 201);
    }
}