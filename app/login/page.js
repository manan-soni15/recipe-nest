"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff9ec]">
      <div className="shadow-lg p-6 rounded-lg">
        <SignIn routing="hash"  redirectUrl="/" />
      </div>
    </div>
  );
};

export default Login;
