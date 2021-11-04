import {
    postUser,
    deleteSession,
    postSession
} from '../utils/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// action creators 
const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

// thunk action creators
export const signup = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors)));

export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors)));

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()),
        errors => dispatch(receiveErrors(errors)));

export const clearSession = () => dispatch => {
    return dispatch(clearSessionErrors())
}