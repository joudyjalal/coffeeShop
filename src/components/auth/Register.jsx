import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./authSchemas";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [successMsg, setSuccessMsg] = useState("");
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setAuthError("");
    setSuccessMsg("");

    try {

      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    
      const userExists = existingUsers.some(
        (user) => user.email === data.email
      );

      if (userExists) {
        setAuthError("This email is already registered. Please sign in.");
        return;
      }

    
      existingUsers.push(data);

     
      localStorage.setItem("users", JSON.stringify(existingUsers));

      setSuccessMsg("Account created successfully! Welcome to Coffee ☕");

      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (error) {
      setAuthError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)] w-full bg-white px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-stone-200">
        <h2 className="text-2xl font-serif font-bold text-[#5c2d18] mb-6 text-center tracking-wider">
          Create Account - Coffee
        </h2>

        {successMsg && (
          <div className="mb-4 p-3 bg-emerald-50 text-emerald-700 text-sm rounded-lg border border-emerald-200 text-center">
            {successMsg}
          </div>
        )}

        {authError && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-200 text-center">
            {authError}
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <div>
            <label className="block text-sm font-medium text-[#5c2d18] mb-1">
              Full Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#5c2d18] transition-colors"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5c2d18] mb-1">
              Email Address
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#5c2d18] transition-colors"
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5c2d18] mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#5c2d18] transition-colors"
              placeholder="At least 6 characters"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#5c2d18] text-white py-2.5 rounded-lg font-medium hover:bg-[#6d3d27] transition-opacity tracking-wider"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-stone-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#5c2d18] font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}