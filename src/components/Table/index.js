import React, { Component } from "react";
import { styles } from "./styles";

class Table extends Component {
  renderMatches() {
    return (
      <tr style={styles.tableCenter}>
        <td style={styles.tableLeft}>
          <div style={styles.tableHeight}>
            <p>
              <strong>Beastmaster</strong>
            </p>
            <p>
              <small>High Skill</small>
            </p>
          </div>
        </td>
        <td>
          <div style={styles.tableHeight}>
            <p style={styles.loss}>
              <strong>Loss</strong>
            </p>
            <p>
              <small>a day ago</small>
            </p>
          </div>
        </td>
        <td>
          <div style={styles.tableHeight}>
            <p>
              <strong>Normal</strong>
            </p>
            <p>
              <small>All pick</small>
            </p>
          </div>
        </td>
        <td>
          <small>29:06</small>
        </td>
        <td>
          <small>5/1/3</small>
        </td>
      </tr>
    );
  }

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
        <tbody>{this.renderMatches()}</tbody>
      </table>
    );
  }
}

export default Table;
