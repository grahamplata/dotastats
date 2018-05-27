import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
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
    height: "175px",
    padding: "20px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  },
  appTitle: { fontSize: "1.5em" },
  container: {
    display: "flex",
    flexDirection: "column",
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
          <Card data={this.props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(App);
