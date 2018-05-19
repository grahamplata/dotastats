import React, { Component } from "react";
import Card from "../components/Card";
import logo from "../images/logo.svg";
import injectStyle from "../utils/injectStyle";

const styles = {
  app: {},
  applogo: {
    animation: "App-logo-spin infinite 20s linear",
    height: "80px"
  },
  appHeader: {
    background: "black",
    color: "white",
    textAlign: "center",
    height: "150px",
    padding: "20px"
  },
  appTitle: { fontSize: "1.5em" },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

const keyframesStyle = `
@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

injectStyle(keyframesStyle);

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <header style={styles.appHeader}>
          <img src={logo} style={styles.applogo} alt="logo" />
          <h1 style={styles.appTitle}>
            {process.env.REACT_APP_OPENDOTA != null
              ? "Dota Stats"
              : "Api Key Not Present"}
          </h1>
          <p>A place for dota stats</p>
        </header>
        <div style={styles.container}>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
