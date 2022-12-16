import React, { useEffect } from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {getCarosuelData}from '../api/axios';

function Slider() {
const [carosuelData, setCarosuelData] = useState([]);
useEffect(() => {
  getCarosuel();
}, []);
const getCarosuel = async () => {
 const response = await getCarosuelData();
 return setCarosuelData(response.data);
}
    return (
      <Carousel variant="dark" slide={false} >
        {
          carosuelData.map((data)=> (
           <Carousel.Item key={data.id}>
            <img
                className="d-block w-75"
                src={require(`../assets/images/${data.image}`)}
                alt="First slide"
            />
            <Carousel.Caption>
                <h5 className='font-s-carosuel'>{data.title}</h5>
                <h1 className='font-x-carosuel'>
                {data.description}
                </h1>
            </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    );
  }
  
  export default Slider;

