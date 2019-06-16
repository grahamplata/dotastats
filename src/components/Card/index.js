import React, { Component } from "react";
import * as actionCreators from "../../actions";
import { connect } from "react-redux";
import Heroes from "../Heroes";
import Loader from "../Loader";
import Stats from "../Stats";
import Ranking from "../Ranking";
import UserProfile from "../UserProfile";
// styles
import CardContainer from "../../styles/containers/Card";
import Column from "../../styles/containers/Column";
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
            <StatsRow>
              {this.props.heroes != null ? (
                <Stats
                  wins={this.props.winrate.win}
                  losses={this.props.winrate.lose}
                />
              ) : (
                <Loader />
              )}
            </StatsRow>
          </PlayerRow>
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
