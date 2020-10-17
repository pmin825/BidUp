import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signup_form_container"
import LoginFormContainer from "./session/login_form_container"
import {AuthRoute} from "../util/route_util";
import Modal from './modal/modal';
import { Provider } from 'react-redux';
import {FooterLinks} from './footer_links';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import ProductIndexContainer from './products/product_index_container';


const App = () => (
  <div>
    <Modal />
    <div className="structure">
      <header>
        <GreetingContainer />
      </header>
      <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} /> 
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/" component={ProductIndexContainer} />
          <Redirect to="/"></Redirect>
      </Switch>
      <footer>
        <FooterLinks />
      </footer>
    </div>
  </div>
);


export default App;