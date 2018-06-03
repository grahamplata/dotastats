import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import Card from "../components/Card";
import logo from "../images/logo.svg";
import injectStyle from "../utils/injectStyle";
import { styles, keyframesStyle } from "./styles";

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
          <Card handleClick={this.props.loadProfile} data={this.props.data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(App);
