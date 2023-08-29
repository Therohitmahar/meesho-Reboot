import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context>
      <Auth0Provider
        domain="dev-t28x62i33emnr3lc.us.auth0.com"
        clientId="Hbb4tRU43yDqyiXy9OHDKT6yQYFUihHx"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </Context>
  </BrowserRouter>
);
