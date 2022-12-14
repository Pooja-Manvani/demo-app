import React, { useState, useEffect } from "react";
import { CardImg } from "react-bootstrap";
import SrcImg from "../assets/images/img7.jpg";
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AOS from 'aos';
import {getAccordionData} from '../api/axios';

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [toggle, settoggle] = useState(false);
  const [accodionData,setAccordionData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await getAccordionData();
    setAccordionData(response.data);
  };
  return (
    <div className=" container d-lg-flex mb-md-5 mt-md-5 overflow-hidden">
      {/* Image section */}
      <div className="w-lg-50 d-flex justify-content-center justify-content-lg-end" >
        <CardImg src={SrcImg} className="about-container-img d-md-block d-none" />
      </div>
      {/* Accordion start */}
      <div className="container w-lg-50 m-3 ms-0 p-md-5 pe-lg-0 overflow-hidden align-self-center justify-content-lg-end ">
        {accodionData.map((data,index)=> (
        <Accordion defaultActiveKey="0" key={data.accordionId}>
          <Accordion.Item eventKey={data.eventKey}  >
            <AccordionHeader
              className="d-flex justify-content-between"
              onClick={() => settoggle(!toggle)}
            >
              <p className="m-0 fs-5 fw-lighter">{ data.accordionTitle }</p>
              {toggle ? (
                <span className="icon-minus"></span>
                ) : (
                <span className="icon-plus"></span>
              )}
            </AccordionHeader>
            <Accordion.Body className="accordion-body-text">
            { data.accordionBody }
            </Accordion.Body>
          </Accordion.Item>
        
          
          {/* <Accordion.Item eventKey="1">
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
          </Accordion.Item> */}
        </Accordion>
        ))}
      </div>
      {/* Accordion end */}
    </div>
  );
}
