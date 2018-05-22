import React, { Component } from "react";
import Heroes from "../Heroes";
import Stats from "../Stats";
import Ranking from "../Ranking";
import UserProfile from "../UserProfile";

let imgUrl =
  "https://steamcommunity-a.akamaihd.net/economy/image/W_I_5GLm4wPcv9jJQ7z7tz_l_0sEIYUhRfbF4arNQkgGQGKd3kMuVpY7Dw1D7xi1ZUKC0ulDeazXAwk8JZ3tR1e4JpKByUilUt5ARcdmK2oc0ra01wtFAT_SUbMTWdV6upKV1Vi_WQKULzA0yt8CgfKdg8HWXPPWrhvkJVAmgrVuE9xNzMhKFD2b/490fx326f";

class Card extends Component {
  render() {
    return (
      <div style={styles.card}>
        <div style={styles.stats}>
          <div style={styles.playerRow}>
            <UserProfile />
            <Ranking />
          </div>
          <div style={styles.statsrow}>
            <Heroes />
            <Stats />
          </div>
          <div style={styles.row}>
            <CardFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

const CardFooter = props => (
  <p style={{ opacity: "0.6" }}>
    <small>Stats provided by OpenDota</small>
  </p>
);

const styles = {
  card: {
    display: "flex",
    borderRadius: "10px",
    marginTop: 15,
    backgroundImage:
      "linear-gradient(to top, rgba(0,180,219, 0.9), rgba(0,131,200, 0.6)), url(" +
      imgUrl +
      ")",
    overflow: "hidden",
    width: "450px",
    height: "200px",
    paddingLeft: "15px",
    paddingRight: "15px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  },
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
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  statsrow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  playerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "10px"
  }
};
