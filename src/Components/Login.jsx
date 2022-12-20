import React, { useState } from "react";
import {
  Alert,
  Button,
  Form,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import ReactModal from "react-modal";
import { useUserAuth } from "../context/AuthContext";

const signin = "Sign-in";
const signup = "Sign-Up";

export default function Login(props) {
  const { closeModal, openModal } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <ReactModal
      className="overlay-modal"
      isOpen={openModal}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      {toggle ? (
        <Signin
          setToggle={setToggle}
          closeModal={closeModal}
          openModal={openModal}
        />
      ) : (
        <SignUp
          setToggle={setToggle}
          closeModal={closeModal}
          openModal={openModal}
        />
      )}
    </ReactModal>
  );
}

export function Signin(props) {
  const settoggle = () => {
    props.setToggle(false);
  };

  const { closeModal } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      closeModal();
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Form onSubmit={handleSubmit} className="login-form-container">
      <ModalHeader className="d-flex flex-column">
        <ModalTitle>{signin} your account.</ModalTitle>
        <div>{error && <Alert variant="danger">{error}</Alert>}</div>
      </ModalHeader>
      <ModalBody className="d-flex flex-column mt-3 ">
        <label htmlFor="email">
          <input
            type="text"
            className="mb-3"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            className="mb-3"
            name="psw"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
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
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="login-text m-2 p-0 px-1 d-flex justify-content-center"
        >
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      settoggle();
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Form onSubmit={handleSubmit} className="login-form-container">
      <ModalHeader className="d-flex flex-column">
        <ModalTitle>{signup} your account.</ModalTitle>
        <div>{error && <Alert variant="danger">{error}</Alert>}</div>
      </ModalHeader>
      <ModalBody className="d-flex flex-column mt-3 ">
        <label htmlFor="email">
          <input
            type="text"
            className="mb-3"
            name="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            className="mb-3"
            name="psw"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
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
        <Button
          className="login-text m-2 p-0 px-1 d-flex justify-content-center"
          type="submit"
        >
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
