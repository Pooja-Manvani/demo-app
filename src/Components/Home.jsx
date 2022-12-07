import React, { useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import ProductSlider from "./ProductSlider";
import Slider from "./Slider";

export default function Home(props) {
  const aboutRef = useRef(null);
  props.getRef(aboutRef);
  return (
    <div>
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
