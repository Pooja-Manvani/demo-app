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
        <Accordion defaultActiveKey={0} >
        {accodionData.map((data)=> (
          <Accordion.Item eventKey={data.eventKey} >
            <AccordionHeader className="d-flex justify-content-between" >
              <p className="m-0 fs-5 fw-lighter">{ data.accordionTitle }</p>
            </AccordionHeader>
            <Accordion.Body className="accordion-body-text">
            { data.accordionBody }
            </Accordion.Body>
          </Accordion.Item>
        ))}
        </Accordion>
      </div>
      {/* Accordion end */}
    </div>
  );
}
