import React, { Component } from "react";
import moment from "moment";
import "moment-duration-format";
import styled from "styled-components";
import {
  setGameType,
  setLobbyType,
  setSkill,
  setPlayerTeam,
  setMatchWinner
} from "../../utils/matchUtils.js";

class Table extends Component {
  createRows = props => {
    let table = [];
    let matches = props.matches;
    matches.slice(0, 8).forEach((match, index) => {
      table.push(
        <TableCenter key={index}>
          <TableLeft>
            <TableHeight>
              <StatsRow>
                <i className={`d2mh hero-${match.hero_id}`} />
                <StatsColumn>
                  <p>
                    <strong>{match.match_id}</strong>
                    <br />
                    <small>{setSkill(match.skill)}</small>
                  </p>
                </StatsColumn>
              </StatsRow>
            </TableHeight>
          </TableLeft>
          <td>
            <TableHeight>
              <p>
                <strong>
                  {setMatchWinner(match.radiant_win, match.player_slot)}
                </strong>
                <br />
                <small>as {setPlayerTeam(match.player_slot)}</small>
              </p>
            </TableHeight>
          </td>
          <td>
            <TableHeight>
              <p>
                <strong>{setGameType(match.game_mode)}</strong>
                <br />
                <small>{setLobbyType(match.lobby_type)}</small>
              </p>
            </TableHeight>
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
        </TableCenter>
      );
    });
    return table;
  };

  render() {
    return (
      <TableWrapper>
        <thead>
          <TableCenter>
            <TableLeft>Match</TableLeft>
            <th>Result</th>
            <th>Type</th>
            <th>Duration</th>
            <th>KDA</th>
          </TableCenter>
        </thead>
        <tbody>{this.createRows(this.props)}</tbody>
      </TableWrapper>
    );
  }
}

export const TableWrapper = styled.table`
  width: 100%;
  align-text: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const TableCenter = styled.tr`
  text-align: center;
`;

export const TableLeft = styled.th`
  text-align: left;
  padding-bottom: 1em;
  padding-right: 1em;
`;

export const TableHeight = styled.div`
  line-height: 15px;
`;

export const StatsRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StatsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Table;
