import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/header/Navbar";
import { Login, Main } from "./container/index";

const App = () => {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
