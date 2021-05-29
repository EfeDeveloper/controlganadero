import React from "react";
import { Route } from "react-router";

function PageNotFoundRoutes({ component: Component, ...rest }) {

   return (
      <Route {...rest}>
         <Component />
      </Route>
   );
}

export default PageNotFoundRoutes;
