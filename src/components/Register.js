import React, { useState } from "react";
import { addUser } from "../api/axios";
import { Button } from "react-bootstrap";
// import { unstable_HistoryRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const initialValue = {
  name: "",
  email: "",
};

const Register = () => {
  const [user, setUser] = useState(initialValue);
  const { name, email } = user;

  // const history = unstable_HistoryRouter();

  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user).then((res)=>{
        if(res){
            navigate("/contactsList");
        }
    });
  };

  return (
    <div style={{ padding: 10, flex:1, justifyItems:'center',alignItems:'center' }}>
     <h2>Add Contact Details</h2>
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
          style={{ padding: 5, marginLeft:5 }}
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
        />
      </div>

        <div style={{paddingTop:10,paddingLeft:60}}>
                <Button
                style={{ marginLeft: 10, marginBottom: 5 }}
                onClick={() => addUserDetails()}
            >
                Add User{" "}
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

export default Register;
