import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import Card from "../components/Card";
import dota from "../images/dota.svg";
import injectStyle from "../utils/injectStyle";
import { styles, keyframesStyle } from "./styles";
import { Spring } from "react-spring";
import AppFooter from "../components/AppFooter";

injectStyle(keyframesStyle);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content" style={styles.app}>
          <header style={styles.appHeader}>
            <img src={dota} style={styles.applogo} alt="logo" />
            <h1 style={styles.appTitle}>
              {process.env.REACT_APP_OPENDOTA != null
                ? "Dota Stats"
                : "Api Key Not Present"}
            </h1>
            {this.props.profile == null || this.props.isFetching === true ? (
              <button
                style={styles.button}
                onClick={() => {
                  this.props.loadProfile();
                }}
              >
                Fetch Stats
              </button>
            ) : (
              <React.Fragment />
            )}
          </header>
          <div style={styles.container}>
            {this.props.profile != null ? (
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {animation => (
                  <Card
                    style={animation}
                    data={this.props.profile}
                    winrate={this.props.winRate}
                    heroes={this.props.recentMatches}
                  />
                )}
              </Spring>
            ) : !this.props.isFetching ? (
              <React.Fragment />
            ) : (
              <React.Fragment />
            )}
          </div>
        </div>
        <AppFooter />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);
