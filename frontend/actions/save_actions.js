import * as SaveApiUtil from '../utils/save_api_util';

export const RECEIVE_SAVES = 'RECEIVE_SAVES';
export const RECEIVE_SAVE = 'RECEIVE_SAVE';
export const REMOVE_SAVE = 'REMOVE_SAVE';
export const RECEIVE_SAVE_ERRORS = 'RECEIVE_SAVE_ERRORS';

const receiveSaves = (saves) => ({
    type: RECEIVE_SAVES,
    saves
});

const receiveSave = (save) => ({
    type: RECEIVE_SAVE,
    save
});

const removeSave = (saveId) => ({
    type: REMOVE_SAVE,
    saveId
});

const receiveSaveErrors = (errors) => ({
    type: RECEIVE_SAVE_ERRORS,
    errors
});

export const fetchSaves = (userId) => dispatch => SaveApiUtil.fetchSaves(userId)
    .then(fetchedSaves => dispatch(receiveSaves(fetchedSaves)),
        errors => dispatch(receiveSaveErrors(errors)));



export const createSave = (save) => dispatch => SaveApiUtil.createSave(save)
    .then(fetchedSave => dispatch(receiveSave(fetchedSave)),
        errors => dispatch(receiveSaveErrors(errors)));

export const deleteSave = (saveId) => dispatch => SaveApiUtil.deleteSave(saveId)
    .then(() => dispatch(removeSave(saveId)),
        errors => dispatch(receiveSaveErrors(errors)));