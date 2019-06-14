import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <a href={this.props.community}>
          <img src={this.props.profile} alt="" />
        </a>
        <div>
          <h3>
            <button href={this.props.community}>{this.props.username}</button>
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
