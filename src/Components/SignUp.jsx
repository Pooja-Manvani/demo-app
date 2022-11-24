import React from "react";

export default function SignUp(props) {
  const setLogin=()=>{

    props.setLogin(false)
  }
  return (
      <form className="p-lg-4 p-2">
        <h2 className="card-title text-center">Sign-Up Page</h2>
        <div className="mb-3">
          <label className="fw-bold">First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label className="fw-bold" >Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label className="fw-bold" >Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="fw-bold" >Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn-custom">
            Sign Up
          </button>
        </div>
        <button className="forgot-password text-right float-end border-0 bg-white" onClick={setLogin}>
          Already registered sign in?
        </button>
      </form>
  );
}
