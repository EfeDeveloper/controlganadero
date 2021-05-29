import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/routes";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase/firebaseConfig";
import { Skeleton } from "antd";
import "antd/dist/antd.css";
import "./assets/css/index.css";

ReactDOM.render(
   <React.StrictMode>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
         <Suspense fallback={<Skeleton active />}>
            <Routes />
         </Suspense>
      </FirebaseAppProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
