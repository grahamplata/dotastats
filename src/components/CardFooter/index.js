import React from "react";

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = mm + "/" + dd + "/" + yyyy;

const CardFooter = props => (
  <p style={{ opacity: "0.8" }}>
    <small>Last updated {today}</small>
  </p>
);

export default CardFooter;
