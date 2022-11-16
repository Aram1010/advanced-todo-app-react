import React from "react";

import firebase from "firebase/compat/app";
import { auth } from "../firebase/firebase";

const Login = () => {

  const googleAuthentication = () => {
    auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  return (
    <div>
      <button
        onClick={() => {
          googleAuthentication()
        }}
      >
        Sign in
      </button>
    </div>
  );
};

export default Login;
