import React from "react";
import { Redirect, Route, useLocation } from "react-router";

function PrivateRoutes({ component: Component, ...rest }) {
   const user = null;
//    const user = { email: "Ed@gmail.com", pass: "123456789" };
   const location = useLocation();
   return (
      <Route {...rest}>
         {user ? (
            <Component />
         ) : (
            <Redirect to={{ pathname: "/", state: { from: location } }} />
         )}
      </Route>
   );
}

export default PrivateRoutes;
