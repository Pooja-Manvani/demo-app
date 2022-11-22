import React, { useState } from "react";
import "../assets/card.css";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

export default function Card(props) {
  const [showLogin, setLogin] = useState(true);
  const [title, settitle] = useState("Sing Up");
  const setSignUp=()=>{
            setLogin(!showLogin);
            if (!showLogin) {
              settitle("Login");
            }
  }
  return (
    <div className="wrapper-card overflow-hidden">
      {/* Title of card */}
      
      {/* Form for Login */}
   {showLogin &&  <Login />}
   {!showLogin &&  <SignUp />}
      <div className="d-grid px-4">
        <button
          type="button"
          className="btn btn-custom"
          onClick={setSignUp}
        >
          {title}
        </button>
      </div>
    </div>
  );
}
