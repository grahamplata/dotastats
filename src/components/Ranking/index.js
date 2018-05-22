import React, { Component } from "react";
import badge from "../../images/rank_icon_5.png";
import rank from "../../images/rank_star_5.png";

class Ranking extends Component {
  render() {
    return (
      <div style={styles.hero}>
        <div style={{ paddingTop: 15 }}>
          <img src={badge} style={styles.ranking} alt="" />
          <img src={rank} style={styles.stars} alt="" />
        </div>
      </div>
    );
  }
}

export default Ranking;

const styles = {
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  ranking: {
    position: "absolute",
    maxWidth: "80px",
    zIndex: "1"
  },
  stars: {
    maxWidth: "80px",
    zIndex: "3"
  }
};
