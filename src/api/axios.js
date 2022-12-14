import axios from "axios";

const url = "http://localhost:3000/Accordion";

export const getAccordionData = async () =>{
    return await axios.get(`${url}`);
} 