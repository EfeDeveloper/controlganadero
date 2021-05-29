import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";
import PageNotFound from "../pages/404";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import PageNotFoundRoutes from "./404Routes";

function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <PublicRoutes exact path="/" component={Login} />
            <PublicRoutes exact path="/register" component={Register} />
            <PrivateRoutes exact path="/dashboard" component={Dashboard} />
            <PageNotFoundRoutes path="*" component={PageNotFound} />
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;
