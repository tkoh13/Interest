export const fetchBoards = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/boards`,
        method: 'GET'
    })
);

export const fetchBoard = boardId => (
    $.ajax({
        url: `/api/boards/${boardId}`,
        method: 'GET'
    })
);

export const createBoard = (board) => (
    $.ajax({
        url: `/api/boards`,
        method: 'POST',
        data: { board }
    })
);

export const deleteBoard = (boardId) => (
    $.ajax({
        url: `/api/boards/${boardId}`,
        method: 'DELETE'
    })
);
