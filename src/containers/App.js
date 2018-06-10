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
    this.state = { value: "29597998" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.loadProfile(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        {this.props.profile == null || this.props.isFetching === true ? (
          <form style={styles.form} onSubmit={this.handleSubmit}>
            <label style={styles.formLabel}>
              SteamID:{" "}
              <input
                style={styles.formInput}
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input style={styles.formButton} type="submit" value="Submit" />
          </form>
        ) : (
          <React.Fragment />
        )}
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
