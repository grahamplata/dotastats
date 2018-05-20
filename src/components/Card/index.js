import React, { Component } from "react";

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
              <p>
                <i className="d2mh hero-1" />Anti-Mage
              </p>
            </div>
          </div>
          <div style={styles.row}>
            <div style={{ fontWeight: "bold" }}>
              <p>
                Wins: <a style={{ color: "rgb(102, 187, 106)" }}>1610</a>
              </p>
              <p>
                Losses: <a style={{ color: "rgb(255, 76, 76)" }}>1768</a>
              </p>
              <p>Winrate: 47.66%</p>
            </div>
            <div style={{ fontWeight: "bold" }}>
              <p>SOLO MMR: 3915</p>
              <p>
                <i className="d2mh hero-1" />
                <i className="d2mh hero-5" />
                <i className="d2mh hero-10" />
              </p>
            </div>
          </div>
          <div style={styles.row}>
            <p>Open source Dota 2 data platform - powered by</p>
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
  }
};
