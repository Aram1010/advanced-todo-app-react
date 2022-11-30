import React from "react";

import Projects from "../layout/Projects";
import AddProjects from "../projects/AddProjects";

import logo from "../../assets/logo.png";
import DefaultProjects from "../projects/DefaultProjects";
import Logout from "../Logout";

const Sidebar = ({ sidebarShow }) => {
  return (
    <div
      className="flex-[0.3] bg-[#FFFF] text-[#02002E] relative z-50"
      style={sidebarShow ? { display: "none" }: null}
    >
      <div className="p-[10px] px-[10px] h-[100vh] text-[15px]">
        <img src={logo} alt="" className="max-w-[50px]" />
        <div className="py-[50px]">
          <div className="px-[5px]">
            <DefaultProjects />
            <Projects />
          </div>
          <AddProjects />
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
