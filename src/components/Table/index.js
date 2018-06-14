import React, { Component } from "react";
import moment from "moment";
import "moment-duration-format";
import {
  matchUtils,
  setGameType,
  setLobbyType,
  setSkill,
  setPlayerTeam,
  setMatchWinner
} from "../../utils/matchUtils.js";
import { styles } from "./styles";

class Table extends Component {
  componentDidMount() {
    matchUtils();
  }

  createRows = props => {
    let table = [];
    let matches = props.matches;
    matches.slice(0, 8).forEach((match, index) => {
      table.push(
        <tr key={index} style={styles.tableCenter}>
          <td style={styles.tableLeft}>
            <div style={styles.tableHeight}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <i className={`d2mh hero-${match.hero_id}`} />
                <div style={[{ display: "flex", flexDirection: "column" }]}>
                  <p>
                    <strong>{match.match_id}</strong>
                  </p>
                  <p>
                    <small>{setSkill(match.skill)}</small>
                  </p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div style={styles.tableHeight}>
              <p>
                <strong>
                  {setMatchWinner(match.radiant_win, match.player_slot)}
                </strong>
              </p>
              <p>
                <small>as {setPlayerTeam(match.player_slot)}</small>
              </p>
              {/* <p>
                <small>{moment.unix(match.start_time).fromNow()}</small>
              </p> */}
            </div>
          </td>
          <td>
            <div style={styles.tableHeight}>
              <p>
                <strong>{setGameType(match.game_mode)}</strong>
              </p>
              <p>
                <small>{setLobbyType(match.lobby_type)}</small>
              </p>
            </div>
          </td>
          <td>
            <small>
              {moment
                .duration(match.duration, "seconds")
                .format("h [hrs], m [min]")}
            </small>
          </td>
          <td>
            <small>
              {match.kills}/{match.deaths}/{match.assists}
            </small>
          </td>
        </tr>
      );
    });
    return table;
  };

  render() {
    return (
      <table style={styles.tableWrapper}>
        <thead>
          <tr style={styles.tableCenter}>
            <th style={styles.tableLeft}>Match</th>
            <th>Result</th>
            <th>Type</th>
            <th>Duration</th>
            <th>KDA</th>
          </tr>
        </thead>
        <tbody>{this.createRows(this.props)}</tbody>
      </table>
    );
  }
}

export default Table;
