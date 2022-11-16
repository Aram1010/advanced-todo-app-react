import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import { AppContext } from "./context/Context";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppContext.Provider value="">
      <Router>
        <App />
      </Router>
    </AppContext.Provider>
  </React.StrictMode>
);
