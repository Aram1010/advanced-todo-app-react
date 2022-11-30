import React, { useState } from "react";
import SidebarButton from "../SidebarButton";

import { Sidebar, Tasks, User } from "./";

const Home = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  return (
    <div className="flex relative">
      <Sidebar sidebarShow={sidebarShow} />
      <div
        className="absolute left-[10px] top-[10px] z-[200]"
        style={!sidebarShow ? { position: "static", margin: "10px" } : null}
      >
        <SidebarButton
          sidebarShow={sidebarShow}
          setSidebarShow={setSidebarShow}
        />
      </div>
      <div className="flex flex-col flex-[1] bg-[#FBFBFA] ">
        <User />
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
