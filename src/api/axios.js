import axios from "axios";

// Base URL 
const url = 'http://localhost:3000/Contacts';
const http = 'http://localhost:3000/data';

/**
 * 
 * @param {*} id 
 * @returns contact list.
 * @name getContactsList
 */
export const getContactsList = async (id) => {
    id = id || '';
    console.log(url);
    return await axios.get(`${url}/${id}`);
}

export const getdataList = async (id) => {
    id = id || '';
    console.log(http);
    return await axios.get(`${http}/${id}`);
}


/**
 * 
 * @param {*} user 
 * @returns 
 * @name addUser
 */
export const addUser = async (user) => {
    return await axios.post(url,user);
}


/**
 * 
 * @param {*} id,user
 * @returns user data with id
 * @name editContact
 */
export const editContact = async (id,user) => {
    return await axios.put(`${url}/${id}`, user);
}

/**
 * 
 * @param {*} id
 * @name deleteContact
 */
export const deleteContact = async (id) => {
    return await axios.delete(`${url}/${id}`)
}

