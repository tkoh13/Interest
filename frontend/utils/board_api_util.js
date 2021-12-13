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
