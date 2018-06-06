import axios from "axios";

export function loadProfile() {
  return dispatch => {
    dispatch(fetchProfile());
    return axios
      .get(
        "https://api.opendota.com/api/players/29597998"
        // + "?api_key=" + process.env.REACT_APP_OPENDOTA
      )
      .then(response => {
        dispatch(loadWinRate(response.data));
        dispatch(updateProfile(response.data));
        dispatch(loadRecentMatches(response.data));
      });
  };
}

export function loadWinRate() {
  return dispatch => {
    return axios
      .get("https://api.opendota.com/api/players/29597998/wl")
      .then(response => {
        dispatch(updateWinRate(response.data));
      });
  };
}

export function loadRecentMatches() {
  return dispatch => {
    return axios
      .get(
        "https://api.opendota.com/api/players/29597998/recentMatches${process.env.REACT_APP_OPENDOTA}"
      )
      .then(response => {
        dispatch(updateRecentMatches(response.data));
      });
  };
}

export function updateProfile(data) {
  return {
    type: "UPDATE_PROFILE",
    isFetching: false,
    data: data
  };
}

export function fetchProfile() {
  return {
    type: "FETCH_PROFILE",
    isFetching: true
  };
}

export function updateWinRate(data) {
  return {
    type: "UPDATE_WINRATE",
    data: data,
    isFetching: true
  };
}

export function updateRecentMatches(data) {
  return {
    type: "UPDATE_RECENTMATCHES",
    data: data,
    isFetching: true
  };
}
