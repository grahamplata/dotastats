import axios from "axios";

export function loadProfile() {
  return dispatch => {
    return axios
      .get(
        "https://api.opendota.com/api/players/29597998"
        // + "?api_key=" + process.env.REACT_APP_OPENDOTA
      )
      .then(response => {
        dispatch(updateProfile(response.data));
      });
  };
}

export function updateProfile(data) {
  return {
    type: "UPDATE_PROFILE",
    data: data
  };
}
