import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  siginStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import OAuth from "../components/Oauth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(siginStart(formData));
      const res = await fetch("http://localhost:3000/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response Status:", res.status);
      const data = await res.json();
      console.log("Response Data:", data);

      if (res.ok && data.success) {
        dispatch(signInSuccess(data));
        navigate('/');
      } else {
        setError(data.message);
        dispatch(signInFailure(data.message || "Sign-in failed"));
      }
    } catch (error) {
      setError(error.message || "Something went wrong during sign-in");
      dispatch(signInFailure(error));
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <br />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-60">
          Sign In
        </button>
        <br/>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to="/signup">
          <span className="text-blue-600">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-700 mt-5 font-bold">{error}</p>}
    </div>
  );
}
