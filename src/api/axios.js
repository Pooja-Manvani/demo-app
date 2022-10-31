import axios from "axios";

const url = 'http://localhost:3000/Contacts';

export const getContactsList = async (id) => {
    id = id || '';
    console.log(url);
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    debugger
    return await axios.post(url,user);
}

export const editContact = async (id,user) => {
    return await axios.put(`${url}/${id}`, user);
}

export const deleteContact = async (id) => {
    return await axios.delete(`${url}/${id}`)
}

