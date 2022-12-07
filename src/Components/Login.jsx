import React from "react";
import ReactModal from "react-modal";

export default function Login(props) {
  return (
    <ReactModal
      className="overlay-modal"
      isOpen={props.openModal}
      onRequestClose={props.closeModal}
      shouldCloseOnOverlayClick={false}
    >
      <form className="login-form-wrapper my-5 bg-white container">
        <div className="d-flex justify-content-center align-items-center flex-column border">
          <h5 className="fw-normal mb-3 pb-3" >
            Sign into your account
          </h5>

          <div className="form-outline mb-4" >
            <input
              type="email"
              id="form2Example17"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form2Example17" >
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example27"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form2Example27">
              Password
            </label>
          </div>

          <div className="pt-1 mb-4">
            <button className="btn btn-dark btn-lg btn-block" type="button">
              Login
            </button>
          </div>

          <a className="small text-muted" href="#!">
            Forgot password?
          </a>
          <p className="mb-5 pb-lg-2"  >
            Don't have an account?{" "}
            <a href="#!" >
              Register here
            </a>
          </p>
          <a href="#!" className="small text-muted">
            Terms of use.
          </a>
          <a href="#!" className="small text-muted">
            Privacy policy
          </a>
        </div>
      </form>
    </ReactModal>
  );
}
