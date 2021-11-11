export const fetchBoards = () => (
        $.ajax({
            url: 'api/boards',
            method: 'GET'
        })
);

export const fetchBoard = boardId => (
    $.ajax({
        url: `api/boards/${boardId}`,
        method: 'GET'
    })
);
