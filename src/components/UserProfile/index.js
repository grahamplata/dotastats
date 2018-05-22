import React, { Component } from "react";

let profileUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Leica_Camera_logo.svg/2000px-Leica_Camera_logo.svg.png";

class UserProfile extends Component {
  render() {
    return (
      <div style={styles.playerRow}>
        <img style={styles.profile} src={profileUrl} alt="" />
        <div style={{ paddingLeft: 5 }}>
          <h3>Leica</h3>
        </div>
      </div>
    );
  }
}

export default UserProfile;

const styles = {
  profile: {
    border: "4px",
    borderStyle: "solid",
    color: "white",
    borderRadius: "50%",
    maxWidth: "55px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  },
  playerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "10px"
  }
};
