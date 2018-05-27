let defaultState = {
  tracked_until: "1530028911",
  leaderboard_rank: null,
  rank_tier: 55,
  mmr_estimate: {
    estimate: 3573
  },
  competitive_rank: null,
  profile: {
    account_id: 29597998,
    personaname: "Leica",
    name: null,
    cheese: 0,
    steamid: "76561197989863726",
    avatar:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/cd/cd39850b48021b7d72eca20d31338ecae4512e48.jpg",
    avatarmedium:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/cd/cd39850b48021b7d72eca20d31338ecae4512e48_medium.jpg",
    avatarfull:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/cd/cd39850b48021b7d72eca20d31338ecae4512e48_full.jpg",
    profileurl: "https://steamcommunity.com/id/grahamplata/",
    last_login: "2018-05-18T03:43:25.540Z",
    loccountrycode: "US"
  },
  solo_competitive_rank: 3915
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "UPDATE_PROFILE") {
    return {
      ...state,
      data: action.data
    };
  } else {
    return { ...state };
  }
};

export default mainReducer;
