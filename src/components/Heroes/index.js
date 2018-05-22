import React, { Component } from "react";

class Heroes extends Component {
  render() {
    return (
      <div style={{ fontWeight: "bold" }}>
        <p>SOLO MMR: 3915</p>
        <div>
          <i className="d2mh hero-1" />
          <i className="d2mh hero-7" />
          <i className="d2mh hero-35" />
        </div>
      </div>
    );
  }
}

export default Heroes;
