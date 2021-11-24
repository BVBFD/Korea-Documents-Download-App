import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import { Fragment } from "react";
import "@fortawesome/fontawesome-free/js/all.js";

const authService = new AuthService(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Fragment>
        <App authService={authService} />
      </Fragment>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
