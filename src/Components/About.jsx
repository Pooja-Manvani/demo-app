import React, { useEffect } from "react";
import { CardImg } from "react-bootstrap";
import SrcImg from "../assets/images/img7.jpg";
import Accordion from "react-bootstrap/Accordion";
import CardHeader from "react-bootstrap/esm/CardHeader";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mt-5 overflow-hidden">
      {/* Image section */}
      <div
      >
        <CardImg src={SrcImg} className="w-50"  data-aos="zoom-in" />
      </div>
      {/* Accordion start */}
      <div className="container w-50 overflow-hidden">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <CardHeader className="d-flex p-4 align-items-center justify-content-between text-center">
              <p className="m-0 fs-4 fw-lighter">OUR PROCCESS</p>
              <span className="icon-plus fs-2 fw-lighter"></span>
            </CardHeader>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <CardHeader className="d-flex p-4 align-items-center justify-content-between text-center">
              <p className="m-0 fs-4 fw-lighter">CRAFTMANSHIP</p>
              <span className="icon-plus fs-2 fw-lighter"></span>
            </CardHeader>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <CardHeader className="d-flex p-4 align-items-center justify-content-between text-center">
              <p className="m-0 fs-4 fw-lighter">QUALITY MATERIAL</p>
              <span className="icon-plus fs-2 fw-lighter"></span>
            </CardHeader>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      {/* Accordion end */}
      <div style={{ height: "600px" }}>dgerg</div>
    </div>
  );
}
