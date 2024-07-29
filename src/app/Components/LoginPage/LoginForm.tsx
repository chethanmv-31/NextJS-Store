import { TextField } from "@mui/material";
import React from "react";

const LoginForm = () => {
  return (
    <div className="w-96">
      <p className="text-4xl ">Log in to Exclusive</p>
      <p className="mt-5">Enter your details below </p>

      <div className="mt-3 mb-3">
        <TextField
          id="standard-basic"
          label="User Name "
          variant="standard"
          fullWidth
        />
      </div>
      <div className="mt-3 mb-3">
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          fullWidth
        />
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-[#DB4444] hover:bg-red-500 text-white w-[143px] h-14 mt-8 rounded-md text-[16px]">
          Log in
        </button>

        <p className="mt-8 text-center text-red-600 cursor-pointer">
          Forgot Password ?
        </p>
      </div>
      <p className="mt-8 text-gray-600">
        Don't have account?
        <span className="text-gray-800 border-b p-1 ml-1 cursor-pointer">
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
