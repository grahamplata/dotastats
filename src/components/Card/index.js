import React, { Component } from "react";

const styles = {
  card: {
    maxWidth: "350px",
    borderWidth: "1px",
    borderStyle: "solid",
    alignItems: "stretch",
    justifyContent: "left",
    backgroundColor: "#ecf0f1"
  },
  image: {
    flexGrow: 1,
    height: null,
    width: "100%",
    opacity: "40%",
    background: ["linear-gradient(90deg, black, #111)", "black"]
  },
  spanTitle: {
    margin: 24,
    fontSize: 48,
    fontWeight: "bold",
    backgroundColor: "transparent"
  }
};

class Card extends Component {
  render() {
    return (
      <div style={styles.card}>
        <img src={"http://via.placeholder.com/450x250"} style={styles.image} />
        <h2 style={styles.spanTitle}>Leica</h2>
      </div>
    );
  }
}

export default Card;
