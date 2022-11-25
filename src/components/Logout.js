import React from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase/firebase";

import { FiLogOut } from "react-icons/fi";


const Logout = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    await auth.signOut();

    navigate("/");
  };
  return (
    <button
      type="button"
      onClick={() => logOut()}
      className="absolute bottom-[1rem] flex items-center p-[10px]"
    >
      <FiLogOut />
      <span className="ml-[10px]">Log out</span>
    </button>
  );
};

export default Logout;
