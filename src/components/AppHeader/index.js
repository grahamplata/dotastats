import React from "react";
import Header from "../../styles/containers/Header";
import dota from "../../static/images/dota.svg";

function AppHeader() {
  return (
    <Header>
      <img src={dota} className="Dota-logo" alt="logo" />
      <h1>Dota Stats</h1>
    </Header>
  );
}

export default AppHeader;
