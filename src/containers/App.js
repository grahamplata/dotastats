import React, { Component } from "react";
import { connect } from "react-redux";
import { Spring } from "react-spring";
import Card from "../components/Card";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import * as actionCreators from "../actions";
import injectStyle from "../utils/injectStyle";
import { styles, keyframesStyle } from "./styles";

injectStyle(keyframesStyle);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "29597998"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    this.props.loadProfile(this.state.input);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <div style={styles.container}>
          {this.props.profile == null || this.props.isFetching === true ? (
            <div style={styles.cards}>
              <h3>Enter your 32bit Steam id Below</h3>
              <form style={styles.form} onSubmit={this.handleSubmit}>
                <input
                  style={styles.formInput}
                  type="text"
                  value={this.state.input}
                  onChange={this.handleChange}
                />
                <input style={styles.formButton} type="submit" value="Submit" />
              </form>
            </div>
          ) : (
            <React.Fragment />
          )}
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
          <table
            style={{
              width: "100%",
              maxWidth: "400px",
              alignText: "center",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "5px",
              paddingBottom: "5px",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              zIndex: "1"
            }}
          >
            <tr style={{ textAlign: "center" }}>
              <th style={{ textAlign: "left" }}>Hero</th>
              <th>Result</th>
              <th>Type</th>
              <th>Duration</th>
              <th>KDA</th>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ textAlign: "left" }}>
                <div style={{ lineHeight: "1px" }}>
                  <p>
                    <strong>Beastmaster</strong>
                  </p>
                  <p>
                    <small>High Skill</small>
                  </p>
                </div>
              </td>
              <td>
                <div style={{ lineHeight: "1px" }}>
                  <p style={{ color: "red" }}>
                    <strong>Loss</strong>
                  </p>
                  <p>
                    <small>a day ago</small>
                  </p>
                </div>
              </td>
              <td>
                <div style={{ lineHeight: "1px" }}>
                  <p>
                    <strong>Normal</strong>
                  </p>
                  <p>
                    <small>All pick</small>
                  </p>
                </div>
              </td>
              <td>
                <small>29:06</small>
              </td>
              <td>
                <small>5/1/3</small>
              </td>
            </tr>
          </table>
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
