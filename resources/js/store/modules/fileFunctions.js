import i18n from '@/i18n/index'
import router from '@/router'
import {events} from '@/bus'
import {last} from 'lodash'
import axios from 'axios'
import { Store } from 'vuex'

const actions = {
    moveItem: ({commit, getters, dispatch}, {to_item ,noSelectedItem}) => {

        let itemsToMove = []
        let items = [noSelectedItem]
       
        //If coming no selected item dont get items to move from fileInfoDetail
        if(!noSelectedItem) {
            items = getters.fileInfoDetail
        }

        items.forEach((data) => {
            itemsToMove.push({
                'force_delete': data.deleted_at ? true : false,
                'type': data.type,
                "unique_id": data.unique_id
            })
        })

        // Remove file preview
        if(!noSelectedItem){
            commit('CLEAR_FILEINFO_DETAIL')
        }
        
        // Get route
        let route = getters.sharedDetail && ! getters.sharedDetail.protected
            ? '/api/move/public/' + router.currentRoute.params.token
            : '/api/move'

        axios
            .post(route, {
                _method: 'post',
                to_unique_id:to_item.unique_id,
                items: itemsToMove
            })
            .then(() => {
                itemsToMove.forEach(item=> {
                    commit('REMOVE_ITEM', item.unique_id)
                    commit('INCREASE_FOLDER_ITEM', to_item.unique_id)

                    if (item.type === 'folder' && getters.currentFolder.location !== 'public')
                        dispatch('getAppData')
                    })
            })
            .catch(() => isSomethingWrong())
    },
    createFolder: ({commit, getters, dispatch}, folderName) => {

        // Get route
        let route = getters.sharedDetail && ! getters.sharedDetail.protected
            ? '/api/create-folder/public/' + router.currentRoute.params.token
            : '/api/create-folder'

        axios
            .post(route, {
                parent_id: getters.currentFolder.unique_id,
                name: folderName
            })
            .then(response => {
                commit('ADD_NEW_FOLDER', response.data)

                events.$emit('scrollTop')

                if ( getters.currentFolder.location !== 'public' )
                    dispatch('getAppData')
                if ( getters.currentFolder.location === 'public')
                    dispatch('getFolderTree')

            })
            .catch(() => isSomethingWrong())
    },
    renameItem: ({commit, getters, dispatch}, data) => {

        // Updated name in favourites panel
        if (getters.permission === 'master' && data.type === 'folder')
            commit('UPDATE_NAME_IN_FAVOURITES', data)

        // Get route
        let route = getters.sharedDetail && ! getters.sharedDetail.protected
            ? '/api/rename-item/' + data.unique_id + '/public/' + router.currentRoute.params.token
            : '/api/rename-item/' + data.unique_id

        axios
            .post(route, {
                name: data.name,
                type: data.type,
                _method: 'patch'
            })
            .then(response => {
                commit('CHANGE_ITEM_NAME', response.data)

                if (data.type === 'folder' && getters.currentFolder.location !== 'public')
                    dispatch('getAppData')
                if (data.type === 'folder' && getters.currentFolder.location === 'public')
                    dispatch('getFolderTree')
            })
            .catch(() => isSomethingWrong())
    },
    uploadFiles: ({commit, getters}, {form, fileSize, totalUploadedSize}) => {
        return new Promise((resolve, reject) => {

            // Get route
            let route = getters.sharedDetail && ! getters.sharedDetail.protected
                ? '/api/upload/public/' + router.currentRoute.params.token
                : '/api/upload'

            // Create cancel token for axios cancelation
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();

            axios
                .post(route, form, {
                    cancelToken: source.token,
                    headers: {
                        'Content-Type': 'application/octet-stream'
                    },
                    onUploadProgress: event => {

                        var percentCompleted = Math.floor(((totalUploadedSize + event.loaded) / fileSize) * 100)

                        commit('UPLOADING_FILE_PROGRESS', percentCompleted >= 100 ? 100 : percentCompleted)

                        if (percentCompleted >= 100) {
                            commit('PROCESSING_FILE', true)
                        }
                    }
                })
                .then(response => {
                    commit('PROCESSING_FILE', false)

                    // Check if user is in uploading folder, if yes, than show new file
                    if (response.data.folder_id == getters.currentFolder.unique_id)
                        commit('ADD_NEW_ITEMS', response.data)

                    resolve(response)
                })
                .catch(error => {
                    commit('PROCESSING_FILE', false)

                    reject(error)

                    switch (error.response.status) {
                        case 423:
                            events.$emit('alert:open', {
                                emoji: '😬😬😬',
                                title: i18n.t('popup_exceed_limit.title'),
                                message: i18n.t('popup_exceed_limit.message')
                            })
                            break;
                            case 415:
                                events.$emit('alert:open', {
                                    emoji: '😬😬😬',
                                    title: i18n.t('popup_mimetypes_blacklist.title'),
                                    message: i18n.t('popup_mimetypes_blacklist.message')
                                })
                            break;
                        case 413:
                            events.$emit('alert:open', {
                                emoji: '😟😟😟',
                                title: i18n.t('popup_paylod_error.title'),
                                message: i18n.t('popup_paylod_error.message')
                            })
                            break;
                        default:
                            events.$emit('alert:open', {
                                title: i18n.t('popup_error.title'),
                                message: i18n.t('popup_error.message'),
                            })
                            break;
                    }

                    // Reset uploader
                    commit('UPDATE_FILE_COUNT_PROGRESS', undefined)
                })

            // Cancel the upload request
            events.$on('cancel-upload', () => {
                source.cancel();

                // Hide upload progress bar
                commit('PROCESSING_FILE', false)
                commit('UPDATE_FILE_COUNT_PROGRESS', undefined)
            })
        })
    },
    restoreItem: ({commit, getters}, item) => {

        let restoreToHome = false

        // Check if file can be restored to home directory
        if (getters.currentFolder.location === 'trash')
            restoreToHome = true

        // Remove file
        commit('REMOVE_ITEM', item.unique_id)

        // Remove file preview
        commit('CLEAR_FILEINFO_DETAIL')

        axios
            .post(getters.api + '/restore-item/' + item.unique_id, {
                type: item.type,
                to_home: restoreToHome,
                _method: 'patch'
            })
            .catch(() => isSomethingWrong())
    },
    deleteItem: ({commit, getters, dispatch}, noSelectedItem) => {

        let itemsToDelete = []
        let items = [noSelectedItem]
       
         //If coming no selected item dont get items to move from fileInfoDetail
        if(!noSelectedItem) {
            items = getters.fileInfoDetail
        }
        
        items.forEach((data) => {
            itemsToDelete.push({
                'force_delete': data.deleted_at ? true : false,
                'type': data.type,
                "unique_id": data.unique_id
            })
            
            //    Remove file
            commit('REMOVE_ITEM', data.unique_id)

            // Remove item from sidebar
            if (getters.permission === 'master') {

                if (data.type === 'folder')
                    commit('REMOVE_ITEM_FROM_FAVOURITES', data)
            }

            // Remove file
            commit('REMOVE_ITEM', data.unique_id)

            // Remove item from sidebar
            if (getters.permission === 'master') {

                if (data.type === 'folder')
                    commit('REMOVE_ITEM_FROM_FAVOURITES', data)
            }   
        })
        
        // Remove file preview
        if(!noSelectedItem){
            commit('CLEAR_FILEINFO_DETAIL')
        }

        // Get route
        let route = getters.sharedDetail && ! getters.sharedDetail.protected
            ? '/api/remove-item/public/' + router.currentRoute.params.token
            : '/api/remove-item'

        axios
            .post(route, {
                _method: 'post',
                data: itemsToDelete
            })
            .then(() => {

                itemsToDelete.forEach(data => {
                    
                    // If is folder, update app data
                    if (data.type === 'folder') {

                        if (data.unique_id === getters.currentFolder.unique_id) {

                            if ( getters.currentFolder.location === 'public' ) {
                                dispatch('browseShared', [{folder: last(getters.browseHistory), back: true, init: false}])
                            } else {
                                dispatch('getFolder', [{folder: last(getters.browseHistory), back: true, init: false}])
                            }
                        }
                    }
                })

                if ( getters.currentFolder.location !== 'public' )
                    dispatch('getAppData')

                if ( getters.currentFolder.location === 'public')
                    dispatch('getFolderTree')

            })
            .catch(() => isSomethingWrong())
    },
    emptyTrash: ({commit, getters}) => {

        // Clear file browser
        commit('LOADING_STATE', {loading: true, data: []})

        axios
            .post(getters.api + '/empty-trash', {
                _method: 'delete'
            })
            .then(() => {
                commit('LOADING_STATE', {loading: false, data: []})
                events.$emit('scrollTop')

                // Remove file preview
                commit('CLEAR_FILEINFO_DETAIL')
            })
            .catch(() => isSomethingWrong())
    },
}

// Show error message
function isSomethingWrong() {
    events.$emit('alert:open', {
        title: i18n.t('popup_error.title'),
        message: i18n.t('popup_error.message'),
    })
}

export default {
    actions,
}
