import React, { Component } from "react";
import styled from "styled-components";

class Stats extends Component {
  render() {
    return (
      <div>
        <Wins>
          Wins: <button>{this.props.wins}</button>
        </Wins>
        <Losses>
          Losses: <button>{this.props.losses}</button>
        </Losses>
        <Winrate>
          Winrate:{" "}
          <button>
            {Math.floor(
              (this.props.wins / (this.props.losses + this.props.wins)) * 100
            )}
            %
          </button>
        </Winrate>
      </div>
    );
  }
}

const Wins = styled.p`
  fontweight: bold;
  color: rgb(102, 187, 106);
`;

const Losses = styled.p`
  fontweight: bold;
  color: rgb(255, 76, 76);
`;

const Winrate = styled.p`
  fontweight: bold;
  color: rgb(229, 193, 0);
`;

export default Stats;
