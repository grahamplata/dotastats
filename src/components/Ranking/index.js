import React, { Component } from "react";
import rank1 from "../../images/rank_icon_1.png";
import rank2 from "../../images/rank_icon_2.png";
import rank3 from "../../images/rank_icon_3.png";
import rank4 from "../../images/rank_icon_4.png";
import rank5 from "../../images/rank_icon_5.png";
import rank6 from "../../images/rank_icon_6.png";
import rank7 from "../../images/rank_icon_7.png";
import star1 from "../../images/rank_star_1.png";
import star2 from "../../images/rank_star_2.png";
import star3 from "../../images/rank_star_3.png";
import star4 from "../../images/rank_star_4.png";
import star5 from "../../images/rank_star_5.png";

const stars = [star1, star2, star3, star4, star5];
const ranks = [rank1, rank2, rank3, rank4, rank5, rank6, rank7];
const randomRank = Math.floor(Math.random() * 6);
const randomStar = Math.floor(Math.random() * 5);

class Ranking extends Component {
  render() {
    return (
      <div style={styles.hero}>
        <div style={{ paddingTop: 15 }}>
          <img src={stars[randomStar]} style={styles.ranking} alt="ranking" />
          <img src={ranks[randomRank]} style={styles.stars} alt="stars" />
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
