import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import { AppProvider } from "./context/context";
import { ProjectsProvider , SelectedProjectProvider } from "./context";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <SelectedProjectProvider>
          <ProjectsProvider>
            <App />
          </ProjectsProvider>
        </SelectedProjectProvider>
      </AppProvider>
    </Router>
  </React.StrictMode>
);
