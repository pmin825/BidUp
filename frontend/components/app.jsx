import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signup_form_container"
import LoginFormContainer from "./session/login_form_container"
import {AuthRoute} from "../util/route_util";
import Modal from './modal/modal';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div>
    <Modal />
    <header>
        <Link to="/" className="header-link"></Link>
        <Route exact path="/" component={GreetingContainer} />

    </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} /> 
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Redirect to="/"></Redirect>
        </Switch>
  </div>
);


export default App;