import React from "react";
import { Redirect, Route, useLocation } from "react-router";
import { useUser } from "reactfire";

function PrivateRoutes({ component: Component, ...rest }) {
   const user = useUser();
   const location = useLocation();
   return (
      <Route {...rest}>
         {user.data !== null ? (
            <Component />
         ) : (
            <Redirect to={{ pathname: "/", state: { from: location } }} />
         )}
      </Route>
   );
}

export default PrivateRoutes;
