/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Okka (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak"

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

const tokenLogger = (tokens) => {
  localStorage.setItem('jwttoken', tokens.token);
}


ReactDOM.render(
  <ReactKeycloakProvider 
    initOptions={{ onLoad: 'login-required' }}
    authClient={keycloak}
    onTokens={tokenLogger}
  >
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </ReactKeycloakProvider>,
  document.getElementById("root")
);
