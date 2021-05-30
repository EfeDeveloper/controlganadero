import React from "react";
import { Redirect, Route, useLocation } from "react-router";
import { useUser } from "reactfire";

function PublicRoutes({ component: Component, ...rest }) {
   const user = useUser();
   const location = useLocation();

   return (
      <Route {...rest}>
         {user.data === null ? (
            <Component />
         ) : (
            <Redirect to={{ pathname: "/dashboard", state: { from: location } }} />
         )}
      </Route>
   );
}

export default PublicRoutes;
