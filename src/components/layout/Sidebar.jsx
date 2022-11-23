import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";

import Projects from "../Projects";
import AddProjects from "../AddProjects";

import { FiLogOut } from "react-icons/fi";

import logo from "../../assets/logo.png";
import DefaultProjects from "../DefaultProjects";

const Sidebar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let isRender = false;

    const handle = async () => {
      await setTimeout(1000);

      if (!isRender) {
        //
      }
    };

    handle();

    return () => {
      isRender = true;
    };
  }, []);

  const logOut = async () => {
    await auth.signOut();

    navigate("/");
  };

  return (
    <div className="flex-[0.3] bg-[#FFFF] text-[#02002E]">
      <div className="relative p-[10px] px-[10px] h-[100vh]  text-[15px]">
        <img src={logo} alt="" className="max-w-[50px]" />
        <div className="py-[50px]">
          <div className="max-h-[500px] overflow-y-auto px-[5px]">
            <DefaultProjects />
            <Projects />
          </div>
          <AddProjects />
          <button
            type="button"
            onClick={() => logOut()}
            className="absolute bottom-[1rem] flex items-center"
          >
            <FiLogOut />
            <span className="ml-[10px]">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
