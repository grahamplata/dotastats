import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div class="card">
        <img
          src={"http://via.placeholder.com/350x150"}
          style={{ width: "100%" }}
        />
        <div class="container">
          <h4>
            <b>John Doe</b>
          </h4>
        </div>
      </div>
    );
  }
}

export default Card;
