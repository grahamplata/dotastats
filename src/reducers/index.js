let defaultState = {
  data: {
    tracked_until: "0",
    leaderboard_rank: null,
    rank_tier: 11,
    mmr_estimate: {
      estimate: 0
    },
    competitive_rank: null,
    profile: {
      account_id: 0,
      personaname: "",
      name: null,
      cheese: 0,
      steamid: "76561197989863726",
      avatar:
        "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/cd/cd39850b48021b7d72eca20d31338ecae4512e48.jpg",
      avatarmedium:
        "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/cd/cd39850b48021b7d72eca20d31338ecae4512e48_medium.jpg",
      avatarfull:
        "https://steamuserimages-a.akamaihd.net/ugc/868480752636433334/1D2881C5C9B3AD28A1D8852903A8F9E1FF45C2C8/",
      profileurl: "https://steamcommunity.com/id/grahamplata/",
      last_login: "2018-05-18T03:43:25.540Z",
      loccountrycode: "US"
    },
    solo_competitive_rank: 0
  }
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "UPDATE_PROFILE") {
    console.log("UPDATE_PROFILE: ");
    return {
      ...state,
      data: action.data
    };
  } else {
    console.log("DEFAULT_STATE");
    return { ...state };
  }
};

export default mainReducer;
