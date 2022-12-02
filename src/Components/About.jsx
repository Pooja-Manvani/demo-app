import React, { useState } from "react";
import { CardImg } from "react-bootstrap";
import SrcImg from "../assets/images/img7.jpg";
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";

export default function About() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="container d-flex mb-5 mt-5 overflow-hidden">
      {/* Image section */}
      <div className="w-50 d-flex justify-content-end">
        <CardImg src={SrcImg} className="about-container-img me-5" />
      </div>
      {/* Accordion start */}
      <div className="container w-50 m-3 ms-0 me-5 p-5 overflow-hidden align-self-center justify-content-end ">
        <Accordion defaultActiveKey="0">
          
          <Accordion.Item eventKey="0">
            <AccordionHeader
              className="d-flex justify-content-between"
              onClick={() => settoggle(!toggle)}
            >
              <p className="m-0 fs-5 fw-lighter">OUR PROCCESS</p>
              {toggle ? (
                <span className="icon-minus"></span>
                ) : (
                <span className="icon-plus"></span>
              )}
            </AccordionHeader>
            <Accordion.Body className="accordion-body-text">
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
            <AccordionHeader className="d-flex justify-content-between"
             onClick={() => settoggle(!toggle)}
             >
              <p className="m-0 fs-5 fw-lighter">CRAFTMANSHIP</p>
              {toggle ? (
                <span className="icon-minus"></span>
                ) : (
                <span className="icon-plus"></span>
              )}
            </AccordionHeader>
            <Accordion.Body className="accordion-body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="border-0">
            <AccordionHeader
            className="d-flex justify-content-between"
            onClick={() => settoggle(!toggle)}
            >
              <p className="m-0 fs-5 fw-lighter">QUALITY MATERIAL</p>
              {toggle ? (
                <span className="icon-minus"></span>
                ) : (
                <span className="icon-plus"></span>
              )}
            </AccordionHeader>
            <Accordion.Body className="accordion-body-text">
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
    </div>
  );
}
