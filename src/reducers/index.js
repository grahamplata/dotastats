const initialState = {
  isFetching: false,
  winRate: { win: 0, lose: 0 },
  recentMatches: null
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE": {
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        profile: action.data
      });
    }
    case "FETCH_PROFILE": {
      return Object.assign({}, state, {
        ...state,
        isFetching: true
      });
    }
    case "UPDATE_WINRATE": {
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        winRate: action.data
      });
    }
    case "UPDATE_RECENTMATCHES": {
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        recentMatches: action.data
      });
    }
    case "FETCHING_FAILED": {
      return Object.assign({}, state, {
        ...state,
        isFetching: false
      });
    }
    default:
      return state;
  }
};

export default mainReducer;
