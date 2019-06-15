import React, { Component } from "react";
import { Trail } from "react-spring";
import styled from "styled-components";

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return (
      <>
        <Items>
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
        </Items>
      </>
    );
  }
}

const Items = styled.div`
  display: flex;
  justifycontent: center;
`;

export default Heroes;
