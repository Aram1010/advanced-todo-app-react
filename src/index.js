import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import { AppProvider } from "./context/Context";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);
