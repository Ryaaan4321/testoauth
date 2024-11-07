import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {
  siginStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";
import { useDispatch } from "react-redux";
import { app } from "../firebase.js";

export default function OAuth() {
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      console.log("Initializing Google sign-in...");
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in result:", result);

      console.log("Sending user data to backend...");
      const res = await fetch("http://localhost:3000/user/gsignup/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: result.user?.displayName || "Anonymous",
          email: result.user?.email || "no-email@example.com",
        }),
      });

      const data = await res.json();
      console.log("Backend response:", data);
      dispatch(signInSuccess(data));
    } catch (err) {
      console.log("Error during Google sign-in:", err);
      dispatch(signInFailure(err.message));
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white
         rounded-lg p-3 uppercase hover:opacity-95"
    >
      {" "}
      Contiue with google
    </button>
  );
}
