import React, { useEffect, useState } from "react";
import { getdataList } from "../../api/axios";

export default function TableAnalytics() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await getdataList();
    console.log(res.data);
    setDataList(res.data);
  };

  return (
    <div style={{height:'80%',overflow:'auto',padding:5}}>
      <table className="table" style={{padding:5}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Prod Data</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => 
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.prodData}</td>
              <td>{item.year}</td>
            </tr>
        )}
        </tbody>
      </table>
    </div>
  );
}
