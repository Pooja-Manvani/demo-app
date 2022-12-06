import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import ProductSlider from "./ProductSlider";
import Slider from "./Slider";

export default function Home(props) {
  const aboutRef = useRef(null);
  props.getRef(aboutRef);
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login/>} />
      </Routes>
      <div className="d-flex justify-content-end flex-grow-1 ">
        <Slider />
      </div>
      <div>
        <ProductSlider />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
