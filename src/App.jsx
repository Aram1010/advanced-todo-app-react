import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login, Main } from "./container/index";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
