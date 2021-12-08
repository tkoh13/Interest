import * as UserApiUtil from "../utils/user_api_utli";

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'
export const RESET_USER_ERRORS = 'RESET_USER_ERRORS'

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

const resetUserErrors = () => ({
    type: RESET_USER_ERRORS
});

export const fetchUser = userId => dispatch => UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)),
        errors => dispatch(receiveUserErrors(errors)));
