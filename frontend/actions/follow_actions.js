import * as FollowApiUtil from '../utils/follow_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

const receiveFollows = (follows) => ({
    type: RECEIVE_FOLLOWS,
    follows
});

const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow
});

const removeFollow = (followId) => ({
    type: REMOVE_FOLLOW,
    followId
});

const receiveFollowErrors = (errors) => ({
    type: RECEIVE_FOLLOW_ERRORS,
    errors
});

export const fetchFollows = (userId) => dispatch => FollowApiUtil.fetchFollows(userId)
    .then(fetchedFollows => dispatch(receiveFollows(fetchedFollows)),
        errors => dispatch(receiveFollowErrors(errors)));



export const createFollow = (follow) => dispatch => FollowApiUtil.createFollow(follow)
    .then(fetchedFollow => dispatch(receiveFollow(fetchedFollow)),
        errors => dispatch(receiveFollowErrors(errors)));

export const deleteFollow = (followId) => dispatch => FollowApiUtil.deleteFollow(followId)
    .then(() => dispatch(removeFollow(followId)), 
        errors => dispatch(receiveFollowErrors(errors)));