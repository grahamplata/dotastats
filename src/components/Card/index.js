import React, { Component } from "react";

let imgUrl =
  "http://cdn.dota2.com/apps/dota2/blog/spring_cleaning_2018_blog.jpg";

const styles = {
  card: {
    display: "flex",
    borderRadius: "15px",
    marginTop: 15,
    backgroundImage:
      "linear-gradient(to bottom, rgba(0,180,219, 0.8), rgba(0,131,200, 0.8)), url(" +
      imgUrl +
      ")",
    overflow: "hidden",
    width: "550px",
    height: "250px",
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  content: {
    color: "white"
  }
};

class Card extends Component {
  render() {
    return (
      <div>
        <div style={styles.card}>
          <div style={styles.content}>
            <h2>Graham</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
