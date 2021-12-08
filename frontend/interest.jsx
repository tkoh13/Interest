import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';

import { fetchPins, fetchPin } from './actions/pin_actions'
// import {fetchUser} from './actions/user_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.store = store
    window.fetchPins = fetchPins
    window.fetchPin = fetchPin
    // window.fetchUser = fetchUser

    // TESTING END

    ReactDOM.render(<Root store={store} />, root);
});