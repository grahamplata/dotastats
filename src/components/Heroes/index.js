import React, { Component } from "react";

const randomRank = Math.floor(Math.random() * 115);
const randomStar = Math.floor(Math.random() * 115);
const randomHero = Math.floor(Math.random() * 115);
const randomMMR = Math.floor(Math.random() * 7000);

class Heroes extends Component {
  render() {
    return (
      <div style={{ fontWeight: "bold" }}>
        <p>SOLO MMR: {randomMMR}</p>
        <div>
          <i className={`d2mh hero-${randomRank}`} />
          <i className={`d2mh hero-${randomStar}`} />
          <i className={`d2mh hero-${randomHero}`} />
        </div>
      </div>
    );
  }
}

export default Heroes;
