import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login, Home } from "./components/layout/index";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
