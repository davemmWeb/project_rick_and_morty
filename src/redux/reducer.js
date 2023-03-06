import {
  ADD_CHARACTER,
  DELETE_CHARACTER,
  FILTER_CARDS,
  ORDER_CARDS,
} from "../redux/actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((character) => {
          return character.id !== action.payload;
        }),
      };
    case FILTER_CARDS:
      const filteredCharacters =
        action.payload === "All"
          ? state.allCharacters
          : state.allCharacters.filter((character) => {
              return character.gender === action.payload;
            });
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    case ORDER_CARDS:
      const sortedCharacters = state.allCharacters;
      action.payload === "Ascendente"
        ? sortedCharacters.sort((a, b) => a.id - b.id)
        : sortedCharacters.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: sortedCharacters,
      };

    default:
      return { ...state };
  }
}
