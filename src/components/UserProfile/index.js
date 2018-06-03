import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div style={styles.playerRow}>
        <a href={this.props.community}>
          <img style={styles.profile} src={this.props.profile} alt="" />
        </a>
        <div style={{ paddingLeft: 5 }}>
          <h3>
            <a style={styles.link} href={this.props.community}>
              {this.props.username}
            </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default UserProfile;

const styles = {
  profile: {
    border: "2px",
    borderStyle: "solid",
    color: "white",
    borderRadius: "50%",
    maxWidth: "60px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  },
  playerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
};
