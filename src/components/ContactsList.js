import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteContact, getContactsList } from "../api/axios";

/**
 * @name ContactsList
 * @returns contact list
 */
const ContactsList = (props) => {
  /**
   * @name useState
   */
  const [contactsList, setContactsList] = useState([]);
  /**
   * @name useEffect
   */
  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    setContactsList(props.filteredData);
  }, [props.filteredData]);

  const navigate = useNavigate();

  /**
   * @name getContacts
   * @description service call of get for get response as list data.
   */
  const getContacts = async () => {
    const response = await getContactsList();
    console.log(response.data);
    setContactsList(response.data);
  };

  /**
   * @name deleteData
   * @param {*} id
   * @description Delete contact as per id.
   */
  const deleteData = async (id) => {
    await deleteContact(id);
    getContacts();
  };

  return (
    <div
      style={{
        width: "100%",
        overflow: "auto",
        height: "52%",
        padding: 5,
        paddingTop: 10,
      }}
    >
      <table style={{ width: "100%", padding: 5 }}>
        <thead style={{ padding: 5 }}>
          <tr>
            <td
              style={{
                padding: 5,
                textAlign: "center",
                fontWeight: "bold",
                border: "1px solid lightgrey",
              }}
            >
              ID
            </td>
            <td
              style={{
                padding: 5,
                textAlign: "center",
                fontWeight: "bold",
                border: "1px solid lightgrey",
              }}
            >
              Name
            </td>
            <td
              style={{
                padding: 5,
                textAlign: "center",
                fontWeight: "bold",
                border: "1px solid lightgrey",
              }}
            >
              Email
            </td>
            <td
              style={{
                padding: 5,
                textAlign: "center",
                fontWeight: "bold",
                border: "1px solid lightgrey",
              }}
            >
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          {props.filteredData.map((data) => (
            <tr key={data.id}>
              <td
                style={{
                  padding: 5,
                  textAlign: "center",
                  border: "1px solid lightgrey",
                }}
              >
                {data.id}
              </td>
              <td
                style={{
                  padding: 5,
                  textAlign: "center",
                  border: "1px solid lightgrey",
                }}
              >
                {data.name}
              </td>
              <td
                style={{
                  padding: 5,
                  textAlign: "center",
                  border: "1px solid lightgrey",
                }}
              >
                {data.email}
              </td>
              <td
                style={{
                  padding: 5,
                  textAlign: "center",
                  border: "1px solid lightgrey",
                }}
              >
                <Button onClick={() => navigate(`/editContact/${data.id}`)}>
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
    </div>
  );
};

export default ContactsList;
