import { createSlice } from "@reduxjs/toolkit";

const initialState = { favouriteCharacters: [] };

const favouriteSlice = createSlice({
  name: "favourties",
  initialState,
  reducers: {
    add(state, action) {
      const isCharacterExist = state.favouriteCharacters.find(
        (character) => character.id === action.payload.id
      );
      if (!isCharacterExist) {
        state.favouriteCharacters = [
          action.payload,
          ...state.favouriteCharacters,
        ];
      }
    },
    remove(state, action) {
      console.log(state, action);
      const newFavList = state.favouriteCharacters.filter(
        (character) => character.id !== action.payload
      );
      state.favouriteCharacters = newFavList;
    },
  },
});

export const favouriteActions = favouriteSlice.actions;
export default favouriteSlice.reducer;
