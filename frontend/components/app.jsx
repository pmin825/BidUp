import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signup_form_container"
import LoginFormContainer from "./session/login_form_container"
import {AuthRoute, ProtectedRoute} from "../util/route_util";
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
import ProductShowContainer from './products/product_show_container';
import CreateProductContainer from './products/create_product_container';
import EditProductContainer from "./products/edit_product_container"
import BidIndexContainer from "./bids/bid_index_container"

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
          <ProtectedRoute exact path='/bids' component={BidIndexContainer}/>
          <ProtectedRoute exact path='/products/new' component={CreateProductContainer} />
          <Route exact path='/products/:productId/edit' component={EditProductContainer} />
          <Route exact path='/products/:productId' component={ProductShowContainer} />
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