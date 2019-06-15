import React, { Component } from "react";
import * as actionCreators from "../../actions";
import { connect } from "react-redux";
import Heroes from "../Heroes";
import Loader from "../Loader";
import Stats from "../Stats";
import Ranking from "../Ranking";
import UserProfile from "../UserProfile";
import CardFooter from "../CardFooter";
// styles
import CardContainer from "../../styles/containers/Card";
import Column from "../../styles/containers/Column";
import Row from "../../styles/containers/Row";
import PlayerRow from "../../styles/containers/PlayerRow";
import StatsRow from "../../styles/containers/StatsRow";

class Card extends Component {
  componentWillMount() {
    this.props.loadWinRate(this.props.data.profile.account_id);
    this.props.loadRecentMatches(this.props.data.profile.account_id);
  }
  render() {
    return (
      <CardContainer>
        <Column>
          <PlayerRow>
            {this.props != null ? (
              <UserProfile
                community={this.props.data.profile.profileurl}
                username={this.props.data.profile.personaname}
                profile={this.props.data.profile.avatarfull}
              />
            ) : (
              <Loader />
            )}
            <Ranking ranktier={this.props.data.rank_tier} />
          </PlayerRow>
          <StatsRow>
            {this.props.heroes != null ? (
              <Stats
                wins={this.props.winrate.win}
                losses={this.props.winrate.lose}
              />
            ) : (
              <Loader />
            )}
            {this.props.heroes != null ? (
              <Heroes
                mmr={this.props.data.solo_competitive_rank}
                heroes={this.props.heroes}
              />
            ) : (
              <Loader />
            )}
          </StatsRow>
          <Row>
            <CardFooter />
          </Row>
        </Column>
      </CardContainer>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Card);
