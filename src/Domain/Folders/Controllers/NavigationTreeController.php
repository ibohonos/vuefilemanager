<?php
namespace Domain\Folders\Controllers;

use Domain\Folders\Models\Folder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class NavigationTreeController
{
    public function __invoke(): array
    {
        // Get signed user folders
        $folders = Folder::with('folders:id,parent_id,id,name,team_folder')
            ->where('parent_id')
            ->where('team_folder', false)
            ->where('user_id', Auth::id())
            ->sortable()
            ->get(['id', 'parent_id', 'id', 'name', 'team_folder']);

        // Get signed user team folders
        $teamFolders = Folder::with('folders:id,parent_id,id,name,team_folder')
            ->where('parent_id')
            ->where('team_folder', true)
            ->where('user_id', Auth::id())
            ->sortable()
            ->get(['id', 'parent_id', 'id', 'name']);

        // Get signed user folder which are shared with him
        $sharedFolderIds = DB::table('team_folder_members')
            ->where('user_id', Auth::id())
            ->whereIn('permission', ['can-edit', 'can-view'])
            ->pluck('parent_id');

        $sharedWithMeFolders = Folder::with('folders:id,parent_id,id,name,team_folder')
            ->whereIn('id', $sharedFolderIds)
            ->sortable()
            ->get(['id', 'parent_id', 'id', 'name']);

        return [
            [
                'location'  => 'files',
                'name'      => 'Files',
                'folders'   => $folders,
                'isMovable' => true,
                'isOpen'    => true,
            ],
            [
                'location'  => 'team-folders',
                'name'      => 'Team Folders',
                'folders'   => $teamFolders,
                'isMovable' => false,
                'isOpen'    => false,
            ],
            [
                'location'  => 'shared-with-me',
                'name'      => 'Shared With Me',
                'folders'   => $sharedWithMeFolders,
                'isMovable' => false,
                'isOpen'    => false,
            ],
        ];
    }
}
