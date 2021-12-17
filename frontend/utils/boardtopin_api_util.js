export const fetchSaves = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/boardtopins`,
        method: 'GET'
    })
);

export const createSave = (save) => (
    $.ajax({
        url: `/api/boardtopins`,
        method: 'POST',
        data: { save }
    })
);

export const deleteSave = (saveId) => (
    $.ajax({
        url: `/api/boardtopins/${saveId}`,
        method: 'DELETE'
    })
);
