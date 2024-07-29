import React from 'react'
import LoginForm from '../Components/LoginPage/LoginForm';

const LoginPage = () => {
    return (
        <div className="flex items-center mt-12 mb-12 ">
          <div className="w-[63%]">
            <img
              src="/Side Image.png"
              alt={"side image"}
              style={{ height: "810px", width: "900px" }}
            />
          </div>
          <div className="37%">
            <LoginForm />
          </div>
        </div>
      );
}

export default LoginPage