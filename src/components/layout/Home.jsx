import React from "react";

import { Sidebar, Tasks, User } from "./";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-[0.7] bg-[#FBFBFA] ">
        <User />
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
