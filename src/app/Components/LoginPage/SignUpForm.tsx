"use client"; // Ensure this is at the very top of the file
import { updateForm } from "@/app/store/actions/formActions";
import { RootState } from "@/app/store/store";
import { TextField } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface IFormInput {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const { control, handleSubmit } = useForm<IFormInput>();
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(updateForm(data));
    console.log(data);
  };

  return (
    <div className="w-96">
      <p className="text-4xl">Create an account</p>
      <p className="mt-5">Enter your details below</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-3 mb-3">
          <Controller
            name="firstName"
            control={control}
            defaultValue={formState.firstName}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="standard"
                fullWidth
                autoFocus={false}
              />
            )}
          />
        </div>
        <div className="mt-3 mb-3">
          <Controller
            name="lastName"
            control={control}
            defaultValue={formState.lastName}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="standard"
                fullWidth
                autoFocus={false}
              />
            )}
          />
        </div>
        <div className="mt-3 mb-3">
          <Controller
            name="userName"
            control={control}
            defaultValue={formState.userName}
            render={({ field }) => (
              <TextField
                {...field}
                label="User Name"
                variant="standard"
                fullWidth
                autoFocus={false}
              />
            )}
          />
        </div>
        <div className="mt-3 mb-3">
          <Controller
            name="email"
            control={control}
            defaultValue={formState.email}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="standard"
                fullWidth
              />
            )}
          />
        </div>
        <div className="mt-3 mb-3">
          <Controller
            name="password"
            control={control}
            defaultValue={formState.password}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                variant="standard"
                fullWidth
                type="password"
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="bg-[#DB4444] hover:bg-red-500 text-white w-full h-14 mt-8 rounded-md text-[16px]"
        >
          Create Account
        </button>
      </form>
      <button className="border hover:bg-gray-100 border-gray-300 w-full h-14 mt-4 rounded-md text-[16px] flex items-center justify-center gap-4">
        <img src="/Icon-Google.png" alt="Google Icon" />
        <span>Sign up with Google</span>
      </button>
      <p className="mt-8 text-center text-gray-600">
        Already have account?{" "}
        <span className="text-gray-800 border-b p-1 cursor-pointer">
          Log in
        </span>
      </p>
    </div>
  );
};

export default SignUpForm;
