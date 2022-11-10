import React, { useEffect, useState } from "react";
import { getContactsList } from "../api/axios";
import Card from "../components/ComponentComposition/Card";
import ContactsList from "../components/ContactsList";
// import AnalyticsCard from "../components/ComponentComposition/AnalyticsCard";
import PropsGreet from "../components/propsGreet";

export default function DashBoard() {
  const [contactsList, setContactsList] = useState([]);
  const [filteredData, setFilteredData] = useState(contactsList);
  const [status,setStatus] = useState(Boolean);
  
  
  const getContacts =  () => {

     getContactsList().then((res)=> setContactsList(res.data));
    
    // setContactsList(response.data);
  };

  useEffect(() => {
    getContacts();
  }, []);

  const handleSearch = (event) => {
    console.log(event.target.value);
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(contactsList);
    result = contactsList?.filter((data) => {
      console.log(data);
      if (data.name.toLowerCase().includes(value)) {
        console.log(data);
        return data;
      }
    });
    setFilteredData(result);
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
      <div style={{ display: "flex", padding: 10, }}>
       {/* Analytics Card */}
        <div style={{width:'50%'}}>
          <Card title={"Analytics Data"} status={true}>
                {/* <AnalyticsCard /> */}
          </Card>
        </div>
        {/* User Deatail Card */}
        <div style={{width:'50%'}}>
          <Card title={"User Details"} status={false}>
            <PropsGreet name={"Siroan"} email={'siroan.@gmail.com'} />
          </Card>
        </div>
      </div>
      <div style={{ padding: 10, overflow: "hidden", height: "100%" }}>
        {/* Other Data card */}
        <Card title={" Contacts List"} status={false}>
          <ContactsList filteredData={filteredData} />
        </Card>
      </div>
    </div>
  );
}
