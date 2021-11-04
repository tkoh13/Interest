export const fetchPins = pins => (
    $.ajax({
        url: 'api/pins',
        method: 'GET',
        pins
    })
);