import React, { Component } from "react";
import rank0 from "../../static/images/ranks/rank_icon_0.png";
import rank1 from "../../static/images/ranks/rank_icon_1.png";
import rank2 from "../../static/images/ranks/rank_icon_2.png";
import rank3 from "../../static/images/ranks/rank_icon_3.png";
import rank4 from "../../static/images/ranks/rank_icon_4.png";
import rank5 from "../../static/images/ranks/rank_icon_5.png";
import rank6 from "../../static/images/ranks/rank_icon_6.png";
import rank7 from "../../static/images/ranks/rank_icon_7.png";
import rank8 from "../../static/images/ranks/rank_icon_8.png";
import rank9 from "../../static/images/ranks/rank_icon_9.png";
import star1 from "../../static/images/ranks/rank_star_1.png";
import star2 from "../../static/images/ranks/rank_star_2.png";
import star3 from "../../static/images/ranks/rank_star_3.png";
import star4 from "../../static/images/ranks/rank_star_4.png";
import star5 from "../../static/images/ranks/rank_star_5.png";
import { Spring } from "react-spring";

const stars = [star1, star2, star3, star4, star5];
const ranks = [
  rank0,
  rank1,
  rank2,
  rank3,
  rank4,
  rank5,
  rank6,
  rank7,
  rank8,
  rank9
];

function parseRank(rankTier) {
  return String(rankTier).charAt(0);
}

function parseStars(rankTier) {
  return String(rankTier).charAt(1);
}

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return (
      <div>
        <div>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {styles => (
              <div>
                <img
                  src={
                    this.state.ranktier == null ? (
                      <React.Fragment />
                    ) : (
                      stars[parseStars(this.state.ranktier) - 1]
                    )
                  }
                  alt=""
                />
              </div>
            )}
          </Spring>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {styles => (
              <div>
                <img
                  src={
                    this.state.ranktier == null
                      ? ranks[0]
                      : ranks[parseRank(this.state.ranktier)]
                  }
                  alt=""
                />
              </div>
            )}
          </Spring>
        </div>
      </div>
    );
  }
}

export default Ranking;

const styling = {
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
