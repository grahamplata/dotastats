import React, { Component } from "react";
import badge from "../../images/rank_icon_5.png";
import rank from "../../images/rank_star_5.png";

let imgUrl =
  "https://steamcommunity-a.akamaihd.net/economy/image/W_I_5GLm4wPcv9jJQ7z7tz_l_0sEIYUhRfbF4arNQkgGQGKd3kMuVpY7Dw1D7xi1ZUKC0ulDeazXAwk8JZ3tR1e4JpKByUilUt5ARcdmK2oc0ra01wtFAT_SUbMTWdV6upKV1Vi_WQKULzA0yt8CgfKdg8HWXPPWrhvkJVAmgrVuE9xNzMhKFD2b/490fx326f";

class Ranking extends Component {
  render() {
    return (
      <div style={styles.hero}>
        <div style={{ paddingTop: 15 }}>
          <img src={badge} style={styles.ranking} />
          <img src={rank} style={styles.stars} />
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
