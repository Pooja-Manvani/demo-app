import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * @name Card
 * @param {*} props
 * @returns Card
 */
export default function Card(props) {
  // console.log(props.children)
  const [showTable, setShowTable] = useState(true);
  return (
    <div
      style={{
        backgroundColor: "lightcyan",
        textAlign: "center",
        padding: 20,
        borderRadius: 10,
        color: "gray",
        margin: 10,
        overflow: "hidden",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{props.title}</h1>
        {/* Button toggling view in from parent to child */}
        <div>
          {props.status ? (
            <Button
              style={{ padding: 3, marginTop: 10 }}
              onClick={() => {
                setShowTable(!showTable);
                props.toggleView(showTable);
              }}
            >
              toggle
            </Button>
          ) : null}
        </div>
      </div>
      <div style={{ overflow: "hidden", height: "100%" }}>{props.children}</div>
    </div>
  );
}
