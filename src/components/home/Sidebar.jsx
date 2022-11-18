import React from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";

const Sidebar = () => {
  const navigate = useNavigate();

  const signOut = async () => {
    await auth.signOut();

    navigate("/");
  };
  return <div><button type="button" onClick={() => signOut()}>Sign out</button></div>;
};

export default Sidebar;
