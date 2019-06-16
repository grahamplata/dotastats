import React, { Component } from "react";
import styled from "styled-components";

class Stats extends Component {
  render() {
    return (
      <Statswrapper>
        <p>
          <White>Wins: </White>
          <Wins>{this.props.wins}</Wins>
        </p>
        <p>
          <White>Losses: </White>
          <Losses>{this.props.losses}</Losses>
        </p>
        <p>
          <White>Winrate: </White>
          <Winrate>
            {Math.floor(
              (this.props.wins / (this.props.losses + this.props.wins)) * 100
            )}
            %
          </Winrate>
        </p>
      </Statswrapper>
    );
  }
}

const Statswrapper = styled.div`
  text-align: right;
`;

const White = styled.strong`
  font-weight: bold;
  color: white;
`;

const Wins = styled.strong`
  font-weight: bold;
  color: rgb(102, 187, 106);
`;

const Losses = styled.strong`
  font-weight: bold;
  color: rgb(255, 76, 76);
`;

const Winrate = styled.strong`
  fontweight: bold;
  color: rgb(229, 193, 0);
`;

export default Stats;
