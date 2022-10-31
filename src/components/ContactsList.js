import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteContact, getContactsList } from "../api/axios";


const ContactsList = () => {

  const [contactsList, setContactsList] = useState([]);
  useEffect(() => {
    getContacts();
  }, []);

  const navigate = useNavigate();

  const getContacts = async () => {
    const response = await getContactsList();
    console.log(response.data);
    setContactsList(response.data);
  };

  const deleteData = async (id) => {
    await deleteContact(id);
    
    getContacts();
}

  return (
    <table style={{width:'100%', padding:5}}>
      <thead style={{padding:5}}>
        <tr >
          <td style={{padding:5,textAlign:'center',fontWeight:'bold',border:'1px solid lightgrey'}}>ID</td>
          <td style={{padding:5,textAlign:'center',fontWeight:'bold',border:'1px solid lightgrey'}}>Name</td>
          <td style={{padding:5,textAlign:'center',fontWeight:'bold',border:'1px solid lightgrey'}}>Email</td>
          <td style={{padding:5,textAlign:'center',fontWeight:'bold',border:'1px solid lightgrey'}}>Action</td>
        </tr>
      </thead>
      <tbody>
        {contactsList?.map((data) => (
          <tr key={data.id}>
            <td style={{padding:5,textAlign:'center',border:'1px solid lightgrey'}}>{data.id}</td>
            <td style={{padding:5,textAlign:'center',border:'1px solid lightgrey'}}>{data.name}</td>
            <td style={{padding:5,textAlign:'center',border:'1px solid lightgrey'}}>{data.email}</td>
            <td style={{padding:5,textAlign:'center',border:'1px solid lightgrey'}}>
              
              <Button
                onClick={() => navigate(`/editContact/${data.id}`)}
              >
                Edit
              </Button>
              <Button
                onClick={() => deleteData(data.id)}
                style={{ margin: "0px 20px" }}
              >
                Delete
              </Button>
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactsList;
