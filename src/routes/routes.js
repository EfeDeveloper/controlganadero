import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";
import PageNotFound from "../pages/404";

function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Dashboard} />
            <Route path="*" component={PageNotFound} />
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;
