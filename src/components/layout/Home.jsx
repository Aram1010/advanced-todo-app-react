import React from "react";

// import {AppLayerContext} from "../context/Context"

import {Sidebar , Content} from ".."


const Home = () => {
  // const {user} = AppLayerContext()

  return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;
