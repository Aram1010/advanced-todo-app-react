import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";

import Projects from "../Projects";
import { useSelectedProjectValue } from "../../context";
import AddProjects from "../AddProjects";

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

  const signOut = async () => {
    await auth.signOut();

    navigate("/");
  };
  return (
    <div>
      <Projects />
      <AddProjects />
      <button type="button" onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  );
};

export default Sidebar;
