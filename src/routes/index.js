import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import About from '../pages/About';
import Signin from "../pages/registration/Signin";
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";
import Login from "../pages/registration"

const Routes = () => {
  return (
    <Router>
         <Switch>
          <Route path="/about" component={About} />                                    
          <Route exact path="/" component={Store}/>
          <Route path="/cart" component={Cart} />
          <Route path="/registration/Signin" component={Signin} />
          <Route path="/registration/Login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;