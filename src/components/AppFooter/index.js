import React from "react";
import reactLogo from "../../static/images/react.svg";
import reduxLogo from "../../static/images/redux.svg";
import dotaLogo from "../../static/images/dota.svg";

const Footer = () => (
  <footer className="footer">
    <p>
      Made with
      <a style={styles.text} href="https://reactjs.org/">
        <img src={reactLogo} style={styles.logos} alt="logo" />
      </a>
      managed by{" "}
      <a style={styles.text} href="https://redux.js.org/">
        <img src={reduxLogo} style={styles.logos} alt="logo" />
      </a>{" "}
      and stats provided by{" "}
      <a style={styles.text} href="https://www.opendota.com/">
        <img src={dotaLogo} style={styles.logos} alt="logo" />
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
