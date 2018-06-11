import axios from "axios";

export function loadProfile(account_id) {
  return dispatch => {
    dispatch(fetchProfile());
    return axios
      .get(`https://api.opendota.com/api/players/${account_id}`)
      .then(response => {
        if (response.data.tracked_until == null) {
          dispatch(fetchFailed());
        } else {
          dispatch(updateProfile(response.data));
        }
      })
      .catch(function(error) {
        dispatch(fetchFailed());
        console.log(error);
      });
  };
}

export function loadWinRate(account_id) {
  return dispatch => {
    return axios
      .get(`https://api.opendota.com/api/players/${account_id}/wl`)
      .then(response => {
        dispatch(updateWinRate(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function loadRecentMatches(account_id) {
  return dispatch => {
    return axios
      .get(`https://api.opendota.com/api/players/${account_id}/recentMatches`)
      .then(response => {
        dispatch(updateRecentMatches(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function updateProfile(data) {
  return {
    type: "UPDATE_PROFILE",
    isFetching: false,
    profileValid: true,
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

export function fetchFailed() {
  return {
    type: "FETCHING_FAILED",
    profileValid: false,
    isFetching: false
  };
}
