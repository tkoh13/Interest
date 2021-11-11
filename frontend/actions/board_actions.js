import * as BoardApiUtil from '../utils/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

const receiveBoards = (boards) => ({
    type: RECEIVE_BOARDS,
    boards
});

const receiveBoard = (board) => ({
    type: RECEIVE_BOARD,
    board
});

const receiveBoardErrors = (errors) => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
})


export const fetchBoards = () => dispatch => BoardApiUtil.fetchBoards()
    .then(fetchedBoards => dispatch(receiveBoards(fetchedBoards)),
    errors => dispatch(receiveBoardErrors(errors)));

export const fetchBoard = (boardId) => dispatch => BoardApiUtil.fetchBoard(boardId)
    .then(fetchedBoard => dispatch(receiveBoard(fetchedBoard)),
    errors => dispatch(receiveBoardErrors(errors)));