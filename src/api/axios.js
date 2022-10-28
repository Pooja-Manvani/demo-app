import axios from "axios";

const url = 'http://localhost:3000';

export const getContactsList = async () => {
    // id = id || '';
    console.log(url);
    return await axios.get(`${url}/Contacts`);
}


