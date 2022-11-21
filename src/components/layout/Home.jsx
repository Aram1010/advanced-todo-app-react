import React from "react";

import { Sidebar, Tasks } from "..";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Tasks />
    </div>
  );
};

export default Home;
