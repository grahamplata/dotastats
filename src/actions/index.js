import axios from "axios";

export function loadProfile() {
  return dispatch => {
    return axios
      .get(
        "https://api.opendota.com/api/players/29597998?api_key=d2b4cf60-acbe-4833-a9e7-d17dbd933348"
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
