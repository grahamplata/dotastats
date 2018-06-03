import React, { Component } from "react";
import Heroes from "../Heroes";
import Stats from "../Stats";
import Ranking from "../Ranking";
import UserProfile from "../UserProfile";
import CardFooter from "../CardFooter";
import { styles } from "./styles";

class Card extends Component {
  render() {
    return (
      <div style={styles.card}>
        <div style={styles.columns}>
          <div style={styles.playerRow}>
            <UserProfile
              community={this.props.data.profile.profileurl}
              username={this.props.data.profile.personaname}
              profile={this.props.data.profile.avatarfull}
            />
            <Ranking ranktier={this.props.data.rank_tier} />
          </div>
          <div style={styles.statsrow}>
            {this.props.heroes != null ? (
              <Heroes
                mmr={this.props.data.solo_competitive_rank}
                heroes={this.props.heroes}
              />
            ) : (
              ""
            )}
            <Stats
              wins={this.props.winrate.win}
              losses={this.props.winrate.lose}
            />
          </div>
          <div style={styles.row}>
            <CardFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
