export const fetchPins = () => (
    $.ajax({
        url: 'api/pins',
        method: 'GET'
    })
);

export const fetchPin = (pinId) => (
    $.ajax({
        url: `api/pin/${pinId}`,
        method: 'GET'
    })
)

export const createPin = formData => (
    $.ajax({
        url: 'api/pins',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
    );

export const deletePin = pinId => (
    $.ajax({
        url: `api/pins/${pinId}`,
        method: 'DELETE'
    })
);

export const updatePin = (formData, pin) =>
    $.ajax({
        url: `api/pins/${pin.id}`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false,
    });

