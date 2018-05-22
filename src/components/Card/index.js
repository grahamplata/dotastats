import React, { Component } from "react";
import badge from "../../images/rank_icon_5.png";
import rank from "../../images/rank_star_5.png";

let imgUrl =
  "https://steamcommunity-a.akamaihd.net/economy/image/W_I_5GLm4wPcv9jJQ7z7tz_l_0sEIYUhRfbF4arNQkgGQGKd3kMuVpY7Dw1D7xi1ZUKC0ulDeazXAwk8JZ3tR1e4JpKByUilUt5ARcdmK2oc0ra01wtFAT_SUbMTWdV6upKV1Vi_WQKULzA0yt8CgfKdg8HWXPPWrhvkJVAmgrVuE9xNzMhKFD2b/490fx326f";

let profileUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Leica_Camera_logo.svg/2000px-Leica_Camera_logo.svg.png";

class Card extends Component {
  render() {
    return (
      <div style={styles.card}>
        <div style={styles.stats}>
          <div style={styles.playerRow}>
            <div style={styles.player}>
              <div style={styles.row}>
                <img style={styles.profile} src={profileUrl} />
                <div style={{ paddingLeft: 5 }}>
                  <h3>Leica</h3>
                </div>
              </div>
            </div>
            <div style={styles.hero}>
              <div style={{ paddingTop: 15 }}>
                <img src={badge} style={styles.ranking} />
                <img src={rank} style={styles.stars} />
              </div>
            </div>
          </div>
          <div style={styles.statsrow}>
            <div style={{ fontWeight: "bold" }}>
              <p>SOLO MMR: 3915</p>
              <div>
                <p>
                  <i className="d2mh hero-1" />
                  <i className="d2mh hero-7" />
                  <i className="d2mh hero-35" />
                </p>
              </div>
            </div>
            <div style={{ fontWeight: "bold" }}>
              <p>
                Wins: <a style={{ color: "rgb(102, 187, 106)" }}>1610</a>
              </p>
              <p>
                Losses: <a style={{ color: "rgb(255, 76, 76)" }}>1768</a>
              </p>
              <p>
                Winrate: <a style={{ color: "rgb(229, 193, 0)" }}>47.66%</a>
              </p>
            </div>
          </div>
          <div style={styles.row}>
            <p style={{ opacity: "0.6" }}>
              <small>Stats provided by OpenDota</small>
            </p>
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
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  player: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  profile: {
    border: "4px",
    borderStyle: "solid",
    color: "white",
    borderRadius: "50%",
    maxWidth: "55px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
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
