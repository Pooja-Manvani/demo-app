import React, { useEffect, useState } from "react";
import { getContactsList } from "../api/axios";
import Card from "../components/ComponentComposition/Card";
import ContactsList from "../components/ContactsList";
import Counter from "../components/Counter";
import PropsGreet from "../components/propsGreet";

export default function DashBoard() {
  useEffect(() => {
    getContacts();
  }, []);
  const [contactsList, setContactsList] = useState([]);
  const [filteredData, setFilteredData] = useState(contactsList);


  const getContacts = async () => {
    console.log('sass');
    const response = await getContactsList();
    console.log(response.data);
    setContactsList(response.data);
  };

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = contactsList.filter((data) => {
      // console.log(...data.name.includes(value));
      if (data.name.toLowerCase().includes(value)) {
        return data;
      }
    });
    setFilteredData(result);
    // console.log(filteredData);
  };

  return (
    <div style={{ padding: 10, height: "100%", overflow: "hidden" }}>
      {/* Title */}
      <div
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>DashBoard</h1>
        <div style={{ padding: 5, paddingRight: 20, display: "flex" }}>
          <input
            style={{ borderColor: "grey", borderRadius: 5, padding: 5 }}
            placeholder={"Search here from list"}
            onChange={(event) => handleSearch(event)}
          ></input>
        </div>
      </div>
      <div style={{ display: "flex", padding: 10 }}>
        {/* Analytics Card */}
        <Card title={"Analytics Data"}>
          <Counter />
        </Card>
        {/* User Deatail Card */}
        <Card title={"User Details"}>
          <PropsGreet name={"Foo Rose"} />
        </Card>
      </div>
      <div style={{ padding: 10, overflow: "hidden", height: "100%" }}>
        {/* Other Data card */}
        <Card title={" Contacts List"} methodAsProps={()=>getContacts()}>
          <ContactsList filteredData={filteredData}  />
        </Card>
      </div>
    </div>
  );
}
