import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase/firebase";
import { FaMask, FaGoogle } from "react-icons/fa";

const AuthButtons = () => {
  const googleAuthentication = () => {
    auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  };

  const anonymousAuthentication = () => {
    auth.signInAnonymously(auth);
  };

  return (
    <div className="flex flex-col text-[#ffff] min-w-[300px]">
      <button
        className="bg-[#1A73E7] flex items-center rounded-[3px] p-[10px] m-[5px] shadown-[rgba(99,99,99,0.2)_0px_2px_8px_0px]"
        onClick={() => {
          googleAuthentication();
        }}
      >
        <FaGoogle />
        <span className="flex-[0.9]">Sign in with Google</span>
      </button>
      <button
        className="bg-[#000000] flex items-center rounded-[3px] p-[10px] m-[5px] shadown-[rgba(99,99,99,0.2)_0px_2px_8px_0px]"
        onClick={() => {
          anonymousAuthentication();
        }}
      >
        <FaMask />
        <span className="flex-[0.9]">Sign in Anonymously</span>
      </button>
    </div>
  );
};

export default AuthButtons;
