let defaultState = {
  data: {
    rank_tier: 11,
    mmr_estimate: {
      estimate: 0
    },
    profile: {
      account_id: 0,
      personaname: "IceFrog",
      avatarfull:
        "https://pbs.twimg.com/profile_images/807755806837850112/WSFVeFeQ_400x400.jpg"
    },
    heroes: [1, 2, 3]
  }
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
