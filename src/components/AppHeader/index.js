import React from "react";
import Header from "../../styles/containers/Header";
import { Rotate } from "../../styles/containers/Rotate";
import dota from "../../static/images/dota.svg";

function AppHeader() {
  return (
    <Header>
      <Rotate src={dota} alt="logo" />
      <h1>Dota Stats</h1>
    </Header>
  );
}

export default AppHeader;
