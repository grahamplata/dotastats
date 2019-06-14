import React from "react";
import reactLogo from "../../static/images/react.svg";
import reduxLogo from "../../static/images/redux.svg";
import dotaLogo from "../../static/images/dota.svg";

const Footer = () => (
  <footer className="footer">
    <p>
      Made with
      <a href="https://reactjs.org/">
        <img src={reactLogo} alt="logo" />
      </a>
      managed by{" "}
      <a href="https://redux.js.org/">
        <img src={reduxLogo} alt="logo" />
      </a>{" "}
      and stats provided by{" "}
      <a href="https://www.opendota.com/">
        <img src={dotaLogo} alt="logo" />
      </a>
    </p>
  </footer>
);

export default Footer;

export const styles = {
  logos: {
    height: "25px",
    verticalAlign: "middle"
  },
  text: {
    color: "black",
    textDecoration: "none"
  }
};
