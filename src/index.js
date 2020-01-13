import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { render } from 'react-dom'
import "./css/index.css";
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import {Router, browserHistory} from 'react-router';
import {routes} from "./Utils/routes";
import {redirect} from "./Middlewares/redirect";

const saveState = (state) => {
    try {
        // Convert the state to a JSON string
        const serialisedState = JSON.stringify(state);

        // Save the serialised state to localStorage against the key 'app_state'
        window.sessionStorage.setItem('app_state', serialisedState);
    } catch (err) {
        // Log errors here, or ignore
    }
};

/**
 * This function checks if the app state is saved in localStorage
 */
const loadState = () => {
    try {
        // Load the data saved in localStorage, against the key 'app_state'
        const serialisedState = window.sessionStorage.getItem('app_state');

        // Passing undefined to createStore will result in our app getting the default state
        // If no data is saved, return undefined
        if (!serialisedState) return undefined;

        // De-serialise the saved state, and return it.
        return JSON.parse(serialisedState);
    } catch (err) {
        // Return undefined if localStorage is not available,
        // or data could not be de-serialised,
        // or there was some other error
        return undefined;
    }
};

/**
 * This is where you create the app store
 */
const oldState = loadState();


const store = createStore(
    rootReducer,
    oldState,
    composeWithDevTools(applyMiddleware(thunk, logger, redirect)),

);
/**
 * Add a change listener to the store, and invoke our saveState function defined above.
 */

store.subscribe(() => {
    saveState(store.getState());
});



window.store = store;

render(
    (<Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>),
    document.getElementById('root')
);