import { fetchUser } from "../utils/user_api_utli";

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const fetchUser = userId => dispatch => fetchUser(userId)
    .then(user => dispatch(receiveUser(user)),
        errors => dispatch(receiveUserErrors(errors)));
