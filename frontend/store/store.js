import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {

    let middleware

    if (process.env.NODE_ENV === 'production') {
        middleware = [thunk]
    } else {
        middleware = [thunk, logger]
    }

    return createStore(RootReducer, preloadedState, applyMiddleware(...middleware))

}


export default configureStore;