import React, { Component } from "react";
import Heroes from "../Heroes";
import Stats from "../Stats";
import Ranking from "../Ranking";
import UserProfile from "../UserProfile";
import CardFooter from "../CardFooter";

let imgUrl =
  "https://steamcommunity-a.akamaihd.net/economy/image/W_I_5GLm4wPcv9jJQ7z7tz_l_0sEIYUhRfbF4arNQkgGQGKd3kMuVpY7Dw1D7xi1ZUKC0ulDeazXAwk8JZ3tR1e4JpKByUilUt5ARcdmK2oc0ra01wtFAT_SUbMTWdV6upKV1Vi_WQKULzA0yt8CgfKdg8HWXPPWrhvkJVAmgrVuE9xNzMhKFD2b/490fx326f";
const randomHero1 = Math.floor(Math.random() * 115);
const randomHero2 = Math.floor(Math.random() * 115);
const randomHero3 = Math.floor(Math.random() * 115);
const wins = Math.floor(Math.random() * 1000);
const losses = Math.floor(Math.random() * 1000);
let heroes = [randomHero1, randomHero2, randomHero3];

class Card extends Component {
  render() {
    return (
      <div style={styles.card}>
        <div style={styles.columns}>
          <div style={styles.playerRow}>
            <UserProfile
              username={this.props.data.profile.personaname}
              profile={this.props.data.profile.avatarfull}
            />
            <Ranking ranktier={this.props.data.rank_tier} />
          </div>
          <div style={styles.statsrow}>
            <Heroes
              mmr={this.props.data.solo_competitive_rank}
              heroes={heroes}
            />
            <Stats wins={wins} losses={losses} />
          </div>
          <div style={styles.row}>
            <button onClick={()=>{this.props.handleClick()}}>Reload</button>
            <CardFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

const styles = {
  card: {
    display: "flex",
    borderRadius: "10px",
    marginTop: 15,
    backgroundImage:
      "linear-gradient(to top, rgba(0,180,219, 1), rgba(0,131,200, 0.6)), url(" +
      imgUrl +
      ")",
    overflow: "hidden",
    width: "350px",
    height: "200px",
    paddingLeft: "15px",
    paddingRight: "10px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  },
  columns: {
    display: "flex",
    color: "white",
    flexDirection: "column",
    width: "100%"
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
