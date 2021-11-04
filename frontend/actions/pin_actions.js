import * as PinApiUtil from '../utils/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';

const receivePins = (pins) => ({
    type: RECEIVE_PINS,
    pins
})

const receive_pin_errors = (errors) => ({
    type: RECEIVE_PIN_ERRORS,
    errors
})

export const fetchPins = () => dispatch => PinApiUtil.fetchPins()
    .then(fetchedPins => dispatch(receivePins(fetchedPins)),
    errors => dispatch(receive_pin_errors(errors)));
