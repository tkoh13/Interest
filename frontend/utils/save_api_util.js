export const fetchSaves = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/board_to_pins`,
        method: 'GET'
    })
);

export const createSave = (save) => (
    $.ajax({
        url: `/api/board_to_pins`,
        method: 'POST',
        data: { save }
    })
);

export const deleteSave = (saveId) => (
    $.ajax({
        url: `/api/board_to_pins/${saveId}`,
        method: 'DELETE'
    })
);
