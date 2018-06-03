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
          <button
            onClick={() => {
              this.props.loadProfile();
            }}
          >
            Get Profile
          </button>
        </header>
        <div style={styles.container}>
          {this.props.profile != null ? (
            <Card
              data={this.props.profile}
              winrate={this.props.winRate}
              heroes={this.props.recentMatches}
            />
          ) : (
            <React.Fragment />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(App);
