import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login, Home } from "./container/index";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
