import React from "react";
import About from "./About";
import ProductSlider from "./ProductSlider";
import Slider from "./Slider";

export default function Home() {
  return (
    <div>
      <div className="d-flex justify-content-end flex-grow-1 ">
        <Slider />
      </div>
      <div>
        <ProductSlider />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}
