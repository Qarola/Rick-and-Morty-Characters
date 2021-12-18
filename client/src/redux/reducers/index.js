const initialState = {
  allCharacters: [],
  allEpisodes: [],
  allLocations: [],
  searchedCharacter: [],
  searchedEpisode: [],
  searchedLocation: [],
  characterDetail: {},
  getStatus: [],
  getGender: [],
  numberOfPages: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload,
        
      };
    case "SEARCH_CHARACTER":
      return {
        ...state,
        searchedCharacter: action.payload,
      };
      case "GET_CHAR_BY_STATUS":
      return {
        ...state,
        getStatus: action.payload,
      };
      case "GET_CHAR_BY_GENDER":
        return {
          ...state,
          getGender: action.payload,
        };
    case "GET_CHARACTER_DETAIL":
      return {
        ...state,
        characterDetail: action.payload,
      };
    
    case "GET_ALL_EPISODES":
      return {
        ...state,
        allEpisodes: action.payload,
      };
      case "GET_EPISODES_BY_NAME":
      return {
        ...state,
        searchedEpisode: action.payload,
      };
      case "GET_ALL_LOCATIONS":
      return {
        ...state,
        allLocations: action.payload,
      };
      case "GET_LOCATION_BY_TYPE":
      return {
        ...state,
        searchedLocation: action.payload,
      };
      case "NEXT":
        return {
          ...state,
          allCharacters: action.payload,

        };
         case "PREV": 
         return {
          ...state,
          allCharacters: action.payload,

         };
    default:
      return state;
  }
}
