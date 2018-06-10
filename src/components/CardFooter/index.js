import React from "react";

var today = new Date(),
  date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

const CardFooter = props => (
  <p style={{ opacity: "0.6" }}>
    <small>Last updated: {date}</small>
  </p>
);

export default CardFooter;
