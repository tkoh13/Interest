export const fetchFollows = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/follows`,
        method: 'GET'
    })
);

export const createFollow = follow => (
    $.ajax({
        url: `/api/follows`,
        method: 'POST',
        data: follow
    })
);

export const deleteFollow = followId => (
    $.ajax({
        url: `/api/follows/${followId}`,
        method: 'DELETE'
    })
);
