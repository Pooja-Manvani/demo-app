import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/img1.jpg'
import image2 from '../assets/images/img2.jpg'
import image3 from '../assets/images/img3.jpg'


function Slider() {

    return (
      <Carousel variant="dark" slide={false} >
           <Carousel.Item>
            <img
                className="d-block w-75"
                src={image1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h5 className='font-s-carosuel'>BEAUTIFUL FLORAL AROMA</h5>
                <h1 className='font-x-carosuel'>
                EXPERIENCE THE MOST REFINDED SCENTS
                </h1>
            </Carousel.Caption>
            </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className='font-s-carosuel'>POIGNANT AND GRACEFUL</h5>
            <h1 className='font-x-carosuel'>MINT SENCTS WITH THE HINT OF CITRUS</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-75"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className='font-s-carosuel'>NEW ELEGANT FRAGRANCES</h5>
            <h1 className='font-x-carosuel'>
              LUXURIOUS PERFUMES FOR EVERY WOMEN
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Slider;

