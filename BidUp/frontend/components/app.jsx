import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signup_form_container"
import LoginFormContainer from "./session/login_form_container"
import {Route} from "react-router-dom";
import {AuthRoute} from "../util/route_util"
// import LogformContainer from './session/logform_container'



const App = () => (
  <div>
    <header>
        <h1>BidUp LIVE</h1>
        <Route exact path="/" component={GreetingContainer} />
    </header>
        <AuthRoute path="/login" component={LoginFormContainer} /> 
        <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);


export default App;