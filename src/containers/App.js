import React, { Component } from "react";
import Card from "../components/Card";
import logo from "../images/logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {process.env.REACT_APP_OPENDOTA != null
              ? "Dota Stats"
              : "Api Key Not Present"}
          </h1>
        </header>
        <p className="App-intro">Default User Profile</p>
        <div className="container">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
