import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { login, logout, signup } from "./actions/session_actions";
import ReactGA from "react-ga";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
            },
            session: { id: window.currentUser.id },
        };

        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store} />, root);

    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.logout = logout;

    function initializeReactGA() {
        ReactGA.initialize("G-6CBPE55S7T");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    initializeReactGA();
});
