import React, { Component } from "react";
import styled from "styled-components";
import Column from "../../styles/containers/Column";

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return (
      <Column>
        <p>Recently Played</p>
        <Items>
          {this.state.heroes.slice(0, 3).map(item => (
            <i key={item.match_id} className={`d2mh hero-${item.hero_id}`} />
          ))}
        </Items>
      </Column>
    );
  }
}

const Items = styled.div`
  display: flex;
  justifycontent: center;
`;

export default Heroes;
