import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editContact, getContactsList } from "../api/axios";

const initialValue = {
  name: "",
  email: "",
};

const EditContact = () => {
  const [user, setUser] = useState(initialValue);

  const { name, email } = user;

  const { id } = useParams();

  useEffect(() => {
    loadContactData();
  },[]);

  const loadContactData = async () => {
    await getContactsList(id).then((res) => {
      if (res) {
        setUser({
          name: res.data.name,
          email: res.data.email,
        });
      }
    });
  };

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editContactDetails = async () => {
    await editContact(id, user).then((res) => {
      if (res) {
        navigate("/contactsList");
      }
    });
  };

  return (
    <div
      style={{
        padding: 10,
        flex: 1,
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <h2>Edit Contact Details</h2>
      <div>
        <label style={{ padding: 10 }}>Name</label>
        <input
          style={{ padding: 5 }}
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
        />
      </div>

      <div>
        <label style={{ padding: 10 }}>Email</label>
        <input
          style={{ padding: 5, marginLeft: 5 }}
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
        />
      </div>

      <div style={{ paddingTop: 10, paddingLeft: 60 }}>
        <Button
          style={{ marginLeft: 10, marginBottom: 5 }}
          onClick={() => editContactDetails()}
        >
          Update Contact{" "}
        </Button>

        <Button
          style={{ marginLeft: 10, marginBottom: 5 }}
          onClick={() => navigate("/contactsList")}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditContact;
