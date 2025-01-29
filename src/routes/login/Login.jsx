import React from "react";
import { useState } from "react";

import Navbar from "/src/routes/login/components/Navbar";
import LoginForm from "/src/routes/login/components/LoginForm";
import Footer from "/src/Components-common/Footer.jsx";

const Login = () => {
  return (
    <div className="flex h-screen flex-col justify-between gap-16">
      <Navbar />
      <div className="flex flex-col gap-8 overflow-scroll">
        <div className="flex justify-evenly gap-36 px-24">
          <p className="font-normal text-[50px] w-1/2 py-16">
            We make your mental health and well being the priority.
          </p>
          <LoginForm className="w-2/5 " />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
