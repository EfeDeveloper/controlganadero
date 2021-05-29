import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/routes";
import "antd/dist/antd.css";
import "./assets/css/index.css";

ReactDOM.render(
   <React.StrictMode>
      <Routes />
   </React.StrictMode>,
   document.getElementById("root")
);
