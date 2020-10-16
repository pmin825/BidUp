import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signup_form_container"
import LoginFormContainer from "./session/login_form_container"
import {AuthRoute} from "../util/route_util";
import Modal from './modal/modal';
import { Provider } from 'react-redux';
import footerLinks from './footer_links';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div className="structure">
    <Modal />
    <Link to="/" className="header-link"></Link>
    {/* <Route path="/" component={GreetingContainer} /> */}
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} /> 
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={GreetingContainer} />
        <Redirect to="/"></Redirect>
    </Switch>
    <footer>
      <Route path="/" component={footerLinks} />
    </footer>
  </div>
);


export default App;