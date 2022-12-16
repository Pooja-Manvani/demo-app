import React, { useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import ProductSlider from "./ProductSlider";
import Slider from "./Slider";
import { useUserAuth } from "../context/AuthContext";

export default function Home(props) {
  const { user } = useUserAuth();
  const aboutRef = useRef(null);
  props.getRef(aboutRef);
  return (
    <div>
      <div className="d-flex justify-content-end flex-grow-1 ">
        <Slider />
      </div>
      <div >
        <ProductSlider />
      </div>
      { user && <div >
        <Product />
        </div>
        }
      <div ref={aboutRef}>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
