import React, { Component } from "react";
import Header from "../../styles/containers/Header";
import dota from "../../static/images/dota.svg";

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <img src={dota} className="Dota-logo" alt="logo" />
        <h1>
          {process.env.REACT_APP_OPENDOTA != null
            ? "Dota Stats"
            : "Api Key Not Present"}
        </h1>
      </Header>
    );
  }
}

export default AppHeader;
