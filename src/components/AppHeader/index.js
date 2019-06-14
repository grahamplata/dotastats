import React, { Component } from "react";
// import { styles } from "../../containers/styles";
import dota from "../../static/images/dota.svg";

class AppHeader extends Component {
  render() {
    return (
      <header>
        <img src={dota} alt="logo" />
        <h1>
          {process.env.REACT_APP_OPENDOTA != null
            ? "Dota Stats"
            : "Api Key Not Present"}
        </h1>
      </header>
    );
  }
}

export default AppHeader;
