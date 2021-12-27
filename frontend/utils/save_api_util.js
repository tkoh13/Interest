export const fetchSaves = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/board_to_pins`,
        method: 'GET'
    })
);

export const createSave = (board_to_pin) => (
    $.ajax({
        url: `/api/board_to_pins`,
        method: 'POST',
        data: { board_to_pin }
    })
);

export const deleteSave = (saveId) => (
    $.ajax({
        url: `/api/board_to_pins/${saveId}`,
        method: 'DELETE'
    })
);
