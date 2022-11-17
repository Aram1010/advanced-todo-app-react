import React from "react";

import signinimg from "../assets/signinimg.jpg";

import AuthButtons from "../components/login/AuthButtons";

const Login = () => {
  return (
    <div className="flex lg:flex-row max-lg:flex-col max-lg:h-[75vh] items-center justify-around m-[5px] relative -z-1">
      <img src={signinimg} className="lg:max-w-[600px] max-lg:max-w-[550px] max-sm:w-[100%]" alt="" />
      <AuthButtons />
    </div>
  );
};

export default Login;
