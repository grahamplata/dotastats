import React, { Component } from "react";
import { styles } from "../../containers/styles";
import dota from "../../static/images/dota.svg";

class AppHeader extends Component {
  render() {
    return (
      <header style={styles.appHeader}>
        <img src={dota} style={styles.applogo} alt="logo" />
        <h1 style={styles.appTitle}>
          {process.env.REACT_APP_OPENDOTA != null
            ? "Dota Stats"
            : "Api Key Not Present"}
        </h1>
      </header>
    );
  }
}

export default AppHeader;
