import React, { Component } from "react";
import moment from "moment";
import "moment-duration-format";
import { styles } from "./styles";

class Table extends Component {
  createRows = props => {
    let table = [];
    let matches = props.matches;
    matches.slice(0, 5).map((match, index) => {
      table.push(
        <tr key={index} style={styles.tableCenter}>
          <td style={styles.tableLeft}>
            <div style={styles.tableHeight}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <i className={`d2mh hero-${match.hero_id}`} />
                <div style={[{ display: "flex", flexDirection: "column" }]}>
                  <p>
                    <strong>{match.match_id}</strong>
                  </p>
                  <p>
                    <small>{match.skill}</small>
                  </p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div style={styles.tableHeight}>
              <p style={styles.loss}>
                <strong>Loss</strong>
              </p>
              <p>
                <small>{moment.unix(match.start_time).fromNow()}</small>
              </p>
            </div>
          </td>
          <td>
            <div style={styles.tableHeight}>
              <p>
                <strong>{match.game_mode}</strong>
              </p>
              <p>
                <small>{match.lobby_type}</small>
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
            <th style={styles.tableLeft}>Hero</th>
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
