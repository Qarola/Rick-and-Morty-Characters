import axios from "axios";

export function getAllCharacters() {
  return function (dispatch) {
    axios
    .get("https://evening-chamber-15559.herokuapp.com/characters")
      //.get("http://localhost:3001/characters")

      .then((res) => {
        console.log(res);
        dispatch({
          type: "GET_ALL_CHARACTERS",
          payload: res.data,
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
      .get(`https://evening-chamber-15559.herokuapp.com/characters?name=${name}`)
        //.get(`http://localhost:3001/characters?name=${name}`)
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

export function getCharByStatus(status) {
  if (status) {
    return function (dispatch) {
      axios
      .get(`https://evening-chamber-15559.herokuapp.com/charbystatus?status=${status}`)
        //.get(`http://localhost:3001/charbystatus?status=${status}`)
        .then((res) =>
          dispatch({
            type: "GET_CHAR_BY_STATUS",
            payload: res.data,
          })
        )
        .catch((err) => {
          console.error(err);
        });
    };
  } else {
    return {
      type: "GET_CHAR_BY_STATUS",
      payload: [],
    };
  }
}

export function getCharByGender(gender) {
  if (gender) {
    return function (dispatch) {
      axios
      .get(`https://evening-chamber-15559.herokuapp.com/charbygender?gender=${gender}`)
        //.get(`http://localhost:3001/charbygender?gender=${gender}`)
        .then((res) =>
          dispatch({
            type: "GET_CHAR_BY_GENDER",
            payload: res.data,
          })
        )
        .catch((err) => {
          console.error(err);
        });
    };
  } else {
    return {
      type: "GET_CHAR_BY_GENDER",
      payload: [],
    };
  }
}

export function getCharacterDetail(id) {
  return function (dispatch) {
    axios
    .get(`https://evening-chamber-15559.herokuapp.com/characters/${id}`)
      //.get(`http://localhost:3001/characters/${id}`)
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
    .get("https://evening-chamber-15559.herokuapp.com/episodes")
      //.get("http://localhost:3001/episodes")
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
    .get(`https://evening-chamber-15559.herokuapp.com/episodes?name=${name}`)
      //.get(`http://localhost:3001/episodes?name=${name}`)
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
    .get("https://evening-chamber-15559.herokuapp.com/locations")
      //.get("http://localhost:3001/locations")
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

export function getLocationByType(type) {
  return function (dispatch) {
    axios
    .get(`https://evening-chamber-15559.herokuapp.com/locations?type=${type}`)
      //.get(`http://localhost:3001/locations?type=${type}`)
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


/* import axios from "axios";

export function getAllCharacters() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/characters")

      .then((res) => {
        console.log(res);
        dispatch({
          type: "GET_ALL_CHARACTERS",
          payload: res.data,
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

export function getCharByStatus(status) {
  if (status) {
    return function (dispatch) {
      axios
        .get(`http://localhost:3001/charbystatus?status=${status}`)
        .then((res) =>
          dispatch({
            type: "GET_CHAR_BY_STATUS",
            payload: res.data,
          })
        )
        .catch((err) => {
          console.error(err);
        });
    };
  } else {
    return {
      type: "GET_CHAR_BY_STATUS",
      payload: [],
    };
  }
}

export function getCharByGender(gender) {
  if (gender) {
    return function (dispatch) {
      axios
        .get(`http://localhost:3001/charbygender?gender=${gender}`)
        .then((res) =>
          dispatch({
            type: "GET_CHAR_BY_GENDER",
            payload: res.data,
          })
        )
        .catch((err) => {
          console.error(err);
        });
    };
  } else {
    return {
      type: "GET_CHAR_BY_GENDER",
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

export function getLocationByType(type) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/locations?type=${type}`)
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
 */