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
                <h5>First slide label</h5>
                <h1 className='font-carosuel'>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
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
            <h5>Second slide label</h5>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-75"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <h1>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Slider;

