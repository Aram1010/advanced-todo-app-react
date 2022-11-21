import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login, Home } from "./components/layout/index";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/tasks" element={<Home />} />
          </Routes>
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
