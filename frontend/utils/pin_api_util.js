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