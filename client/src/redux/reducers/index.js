const initialState = {
  allRecipes: [],
  allDiets: [],
  searchedRecipes: [],
  recipeDetail: {},
  addRecipe: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_RECIPES":
      return {
        ...state,
        allRecipes: action.payload,
      };
    case "SEARCH_RECIPES":
      return {
        ...state,
        searchedRecipes: action.payload,
      };
    case "GET_RECIPE_DETAIL":
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case "ADD_RECIPE":
      return {
        ...state,
        addRecipe: action.payload,
      };

    case "GET_ALL_DIETS":
      return {
        ...state,
        allDiets: action.payload,
      };
      case "FILTER_BY_DIET":
        const recipes = state.allRecipes
        const filteredDiet = action.payload === "All" ? recipes : recipes.filter( e => e.diets.includes(action.payload))
        return{
            ...state,
            allRecipes: filteredDiet
        };

    default:
      return state;
  }
}
