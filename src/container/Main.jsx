import React from "react";
import { useNavigate } from "react-router-dom";

import { AppLayerContext } from "../context/Context";

import { auth } from "../firebase/firebase";

const Main = () => {
  const { user } = AppLayerContext();

  const navigate = useNavigate();

  console.log(user)

  const signOut = () => {
    auth.signOut();

    navigate("/");
  };

  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Main;
