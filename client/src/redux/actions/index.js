import axios from "axios";

export function getAllCharacters() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/characters")

      .then((res) => {
        console.log(res);
        dispatch({
          type: "GET_ALL_CHARACTERS",
          payload: res.data
          
        });
       
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function searchCharacter(name) {
  if (name !== "") {
    return function (dispatch) {
      axios
        .get(`http://localhost:3001/characters?name=${name}`)
        .then((res) =>
          dispatch({
            type: "SEARCH_CHARACTER",
            payload: res.data,
          })
        )
        .catch((err) => {
          console.error(err);
        });
    };
  } else {
    return {
      type: "SEARCH_CHARACTER",
      payload: [],
    };
  }
}

export function getCharacterDetail(id) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/characters/${id}`)
      .then((res) =>
        dispatch({
          type: "GET_CHARACTER_DETAIL",
          payload: res.data,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };
}



export function getAllEpisodes() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/episodes")
      .then((res) =>
        dispatch({
          type: "GET_ALL_EPISODES",
          payload: res.data,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };
}

export function getEpisodesByName(name) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/episodes?name=${name}`)
      .then((res) =>
        dispatch({
          type: "GET_EPISODES_BY_NAME",
          payload: res.data,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };
}

export function getAllLocations() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/locations")
      .then((res) =>
        dispatch({
          type: "GET_ALL_LOCATIONS",
          payload: res.data,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };
}


export function getLocationByType(name) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/location?name=${name}`)
      .then((res) =>
        dispatch({
          type: "GET_LOCATION_BY_TYPE",
          payload: res.data,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };
}

/* export const next = (payload) => ({
  type: "NEXT",
  payload
})

export const prev = (payload) => ({
  type: "PREV",
  payload
}) */