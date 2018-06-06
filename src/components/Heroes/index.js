import React, { Component } from "react";

class Heroes extends Component {
  render() {
    var items = this.props.heroes
      .filter((i, index) => index < 3)
      .map((i, index) => {
        return <i key={i.match_id} className={`d2mh hero-${i.hero_id}`} />;
      });

    return (
      <div>
        <p style={styles.p}>Estimated MMR: {this.props.mmr || 0}</p>
        <div style={styles.items}>{items}</div>
      </div>
    );
  }
}

export default Heroes;

const styles = {
  p: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center"
  },
  items: { display: "flex", justifyContent: "center" }
};
