import React, { Component } from "react";

class Heroes extends Component {
  render() {
    return (
      <div style={{ fontWeight: "bold" }}>
        <p>Estimated MMR: {this.props.mmr || 0}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <i className={`d2mh hero-${this.props.heroes[0]}`} />
          <i className={`d2mh hero-${this.props.heroes[1]}`} />
          <i className={`d2mh hero-${this.props.heroes[2]}`} />
        </div>
      </div>
    );
  }
}

export default Heroes;
