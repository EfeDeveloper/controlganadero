import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Dashboard} />
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;
