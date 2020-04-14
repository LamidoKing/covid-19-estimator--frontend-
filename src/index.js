import React from "react";
import ReactDOM from "react-dom";
///import ReactGA from "react-ga";
//import ReactPixel from "react-facebook-pixel";
import "./Styles/scss/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(

      <BrowserRouter>
        <App />
      </BrowserRouter>,

  document.getElementById("root")
);
serviceWorker.unregister();
