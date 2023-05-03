import { createStore } from "redux";
const InitialState = { favouritesList: [] };

const reduxReducer = (state = InitialState, action) => {
  if (action.type === "ADD") {
    const isCharacterExist = state.favouritesList.find(
      (character) => character.id === action.character.id
    );
    if (!isCharacterExist) {
      return {
        favouritesList: [action.character, ...state.favouritesList],
      };
    }
  }

  return state;
};

const store = createStore(reduxReducer);

export default store;
