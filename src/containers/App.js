import React, { Component } from "react";
import { connect } from "react-redux";
import { Spring } from "react-spring";
import AppFooter from "../components/AppFooter";
import Content from "../styles/containers/Content";
import Card from "../components/Card";
import AppHeader from "../components/AppHeader";
import Table from "../components/Table";
import * as actionCreators from "../actions";

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
        <Content>
          {this.props.profile == null || this.props.isFetching === true ? (
            <div>
              <h3>Enter your 32bit Steam id Below</h3>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.input}
                  onChange={this.handleChange}
                />
                <input type="submit" value="Submit" />
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
          {this.props.recentMatches != null ? (
            <Table matches={this.props.recentMatches} />
          ) : (
            <React.Fragment />
          )}
        </Content>
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
