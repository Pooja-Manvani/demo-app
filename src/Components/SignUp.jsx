import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/card.css";
import Card from "../core/Card";

export default function SignUp() {
  const navigate = useNavigate();
  return (
      <form>
        <h2 className="card-title text-center">Sign-Up Page</h2>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-custom">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href={navigate("/login")} >sign in?</a>
        </p>
      </form>
  );
}
