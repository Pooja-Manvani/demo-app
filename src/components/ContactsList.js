import React, { useEffect, useState } from "react";
import { getContactsList } from "../api/axios";

const ContactsList = () => {

  const [contactsList, setContactsList] = useState([]);
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const response = await getContactsList();
    console.log(response.data);
    setContactsList(response.data);
  };

  return (
    <table >
      <thead>
        <tr >
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {contactsList?.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>
              <button
                variant="contained"
                color="primary"
                style={{ margin: "0px 20px" }}
                to={`/edit/${data.id}`}
              >
                Edit
              </button>
              <button
                variant="contained"
                color="secondary"
                style={{ margin: "0px 20px" }}
              >
                Cancel
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactsList;
