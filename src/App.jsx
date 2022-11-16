import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./container/index";

const App = () => {
  return (
    <div>
      <Routes>
        <Route to="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
