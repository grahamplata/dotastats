import { heroes } from "../static/heroes";
import { games } from "../static/games";

export const matchUtils = () => {
  console.log("lodaed");
};

export const setLobbyType = lobby_type => {
  switch (lobby_type) {
    case 0:
      return "Public matchmaking";
    case 1:
      return "Practice";
    case 2:
      return "Tournament";
    case 3:
      return "Tutorial";
    case 4:
      return "Co-op with bots";
    case 5:
      return "Team match";
    case 6:
      return "Solo queue";
    case 7:
      return "Ranked";
    case 8:
      return "Solo mid 1 vs. 1";
    default:
      return "Dota";
  }
};

export const setSkill = skill => {
  switch (skill) {
    case null:
      return "";
    case 0:
      return "Low Skill";
    case 1:
      return "Normal Skill";
    case 2:
      return "High Skill";
    case 3:
      return "Very High Skill";
    default:
      return "Reddit";
  }
};

export const setGameType = game_mode => {
  var gameType = games.find(game => game.id === game_mode);
  if (gameType !== "undefined") {
    return gameType.name;
  } else {
    return "Unavailable";
  }
};

export const setHeroName = hero_id => {
  var heroObject = heroes.find(hero => hero.id === hero_id);
  if (heroObject !== "undefined") {
    return heroObject.localized_name;
  } else {
    return "Unavailable";
  }
};

export const setPlayerTeam = slot => {
  if (slot <= 4) {
    return "Radiant";
  }
  return "Dire";
};

export const setMatchWinner = (radiant_win, slot) => {
  const team = setPlayerTeam(slot);
  if (team === "Radiant" && radiant_win === true) {
    return "Victory";
  } else if (team === "Dire" && radiant_win === false) {
    return "Victory";
  }
  return "Loss";
};
