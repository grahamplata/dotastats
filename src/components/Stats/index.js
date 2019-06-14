import React, { Component } from "react";

class Stats extends Component {
  render() {
    return (
      <div style={{ fontWeight: "bold" }}>
        <p>
          Wins: <button style={styles.wins}>{this.props.wins}</button>
        </p>
        <p>
          Losses: <button style={styles.losses}>{this.props.losses}</button>
        </p>
        <p>
          Winrate:{" "}
          <button style={styles.winrate}>
            {Math.floor(
              (this.props.wins / (this.props.losses + this.props.wins)) * 100
            )}
            %
          </button>
        </p>
      </div>
    );
  }
}

export default Stats;

const styles = {
  stats: {
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    paddingLeft: 5,
    paddingRight: 5
  },
  wins: { color: "rgb(102, 187, 106)" },
  losses: { color: "rgb(255, 76, 76)" },
  winrate: { color: "rgb(229, 193, 0)" }
};
