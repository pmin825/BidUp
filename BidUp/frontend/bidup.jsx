import React from "react";
import ReactDOM from "react-dom";
import * as SessionApiUtil from './util/session_api_util'
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<h1>BidUp</h1>, root);

    window.signup = SessionApiUtil.signup;
    window.login = SessionApiUtil.login;
    window.logout = SessionApiUtil.logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});