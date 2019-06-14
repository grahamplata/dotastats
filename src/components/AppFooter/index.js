import React from "react";
import Footer from "../../styles/containers/Footer";
import reactLogo from "../../static/images/react.svg";
import reduxLogo from "../../static/images/redux.svg";
import dotaLogo from "../../static/images/dota.svg";

const AppFooter = () => (
  <Footer>
    <div className="inline">
      <p>Made with</p>
      <a className="react-logo" href="https://reactjs.org/">
        <img src={reactLogo} alt="reactlogo" />
      </a>
      <p>managed by</p>
      <a className="redux-logo" href="https://redux.js.org/">
        <img src={reduxLogo} alt="reduxLogo" />
      </a>
      <p>and stats provided by</p>
      <a className="dota-logo" href="https://www.opendota.com/">
        <img src={dotaLogo} alt="dotaLogo" />
      </a>
    </div>
  </Footer>
);

export default AppFooter;
