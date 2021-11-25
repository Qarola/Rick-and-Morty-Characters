import axios from "axios";

export function getAllRecipes() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/home")

      .then((res) => {
        console.log(res);
        dispatch({
          type: "GET_ALL_RECIPES",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function searchRecipes(recipe) {
  if (recipe !== "") {
    return function (dispatch) {
      axios
        .get(`http://localhost:3001/recipes?name=${recipe}`)
        .then((res) =>
          dispatch({
            type: "SEARCH_RECIPES",
            payload: res.data,
          })
        )
        .catch((err) => {
          console.error(err);
        });
    };
  } else {
    return {
      type: "SEARCH_RECIPES",
      payload: [],
    };
  }
}

export function getRecipeDetail(id) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/recipes/${id}`)
      .then((res) =>
        dispatch({
          type: "GET_RECIPE_DETAIL",
          payload: res.data,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };
}

export function addRecipe({ name, summary, healthScore, stepByStep, diets }) {
  return function (dispatch) {
    const Recipe = { name, summary, healthScore, stepByStep, diets };
    axios
      .post("http://localhost:3001/recipe", Recipe)
      .then((res) =>
        dispatch({
          type: "ADD_RECIPE",
          payload: res.data,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };
}

export function getAllDiets() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/types")
      .then((res) =>
        dispatch({
          type: "GET_ALL_DIETS",
          payload: res.data,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };
}


export function filterRecipesByDiet(payload){
  return {
      type: "FILTER_BY_DIET",
      payload
  }
}