import * as PinApiUtil from '../utils/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';

const receivePins = (pins) => ({
    type: RECEIVE_PINS,
    pins
})
const receivePin = (pin) => ({
    type: RECEIVE_PIN,
    pin
})

const receivePinErrors = (errors) => ({
    type: RECEIVE_PIN_ERRORS,
    errors
})

// remove pin

export const fetchPins = () => dispatch => PinApiUtil.fetchPins()
    .then(fetchedPins => dispatch(receivePins(fetchedPins)),
    errors => dispatch(receivePinErrors(errors)));

export const fetchPin = (pinId) => dispatch => PinApiUtil.fetchPin(pinId)
    .then(fetchedPin => dispatch(receivePin(fetchedPin)),
    errors => dispatch(receivePinErrors(errors)));

// delete pin