import React, { useState } from "react";
import {
  Button,
  Form,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import ReactModal from "react-modal";

const signin = "Sign-in";
const signup = "Sign-Up";

export default function Login(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <ReactModal
      className="overlay-modal"
      isOpen={props.openModal}
      onRequestClose={props.closeModal}
      shouldCloseOnOverlayClick={false}
    >
      {toggle ? (
        <Signin setToggle={setToggle} />
      ) : (
        <SignUp setToggle={setToggle} />
      )}
    </ReactModal>
  );
}

export function Signin(props) {
  const settoggle = () => {
    props.setToggle(false);
  };
  return (
    <Form className="login-form-container">
      <ModalHeader>
        <ModalTitle>{signin} your account.</ModalTitle>
      </ModalHeader>
      <ModalBody className="d-flex flex-column mt-3 ">
        <label htmlFor="username">
          <input
            type="text"
            className="mb-3"
            name="uname"
            placeholder="Enter username"
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            className="mb-3"
            name="psw"
            placeholder="Enter password"
            />
        </label>
        <label className="login-text m-0 p-0 d-flex justify-content-start">
          <input type="checkbox" className="me-2" name="remember" />
          <span className="">Remember me</span>
        </label>
      </ModalBody>
      <ModalFooter className=" ">
        <Button
          className="login-text m-2 p-0 px-1 d-flex justify-content-center"
          onClick={props.closeModal}
          >
          Cancel
        </Button>
        <Button className="login-text m-2 p-0 px-1 d-flex justify-content-center">
          Login
        </Button>
      </ModalFooter>
      <span
        className="psw login-text text-decoration-underline text-primary"
        onClick={settoggle}
      >
        {" "}
        Sign Up?
      </span>
    </Form>
  );
}

export function SignUp(props) {
  const settoggle = () => {
    props.setToggle(true);
  };
  return (
    <Form className="login-form-container">
      <ModalHeader>
        <ModalTitle>{signup} your account.</ModalTitle>
      </ModalHeader>
      <ModalBody className="d-flex flex-column mt-3 ">
        <label htmlFor="username">
          <input
            type="text"
            className="mb-3"
            name="uname"
            placeholder="Enter username"
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            className="mb-3"
            name="psw"
            placeholder="Enter password"
          />
        </label>
        <label htmlFor="repassword">
          <input
            type="text"
            className="mb-3"
            name="rpsw"
            placeholder="Re-enter password"
          />
        </label>
      </ModalBody>
      <ModalFooter className=" ">
        <Button
          className="login-text m-2 p-0 px-1 d-flex justify-content-center"
          onClick={props.closeModal}
        >
          Cancel
        </Button>
        <Button className="login-text m-2 p-0 px-1 d-flex justify-content-center">
          Submit
        </Button>
      </ModalFooter>
      <span
        className="psw login-text text-decoration-underline text-primary"
        onClick={settoggle}
      >
        {" "}
        Sign In?
      </span>
    </Form>
  );
}
