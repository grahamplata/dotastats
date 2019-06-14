import React, { Component } from "react";
import { Trail } from "react-spring";

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return (
      <div>
        <p>Estimated MMR: {this.state.mmr || 0}</p>
        <div>
          <Trail
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            keys={this.state.heroes.slice(0, 3).map(item => item.match_id)}
          >
            {this.state.heroes
              .slice(0, 3)
              .map(item => styles => (
                <i
                  key={item.match_id}
                  className={`d2mh hero-${item.hero_id}`}
                />
              ))}
          </Trail>
        </div>
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
