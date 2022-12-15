import axios from "axios";

const url = "http://localhost:3000/Accordion";
const http = "http://localhost:3000/Carosuel";
const link = "http://localhost:3000/ProductSlider";

export const getAccordionData = async () =>{
    return await axios.get(`${url}`);
} 
export const getCarosuelData = async () =>{
    return await axios.get(`${http}`);
} 
export const getSliderData = async () =>{
    return await axios.get(`${link}`);
} 