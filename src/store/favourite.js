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
        const newFavList = [action.payload, ...state.favouriteCharacters];
        state.favouriteCharacters = newFavList;

        localStorage.setItem("favChars", JSON.stringify(newFavList));
      }
    },
    remove(state, action) {
      const newFavList = state.favouriteCharacters.filter(
        (character) => character.id !== action.payload
      );
      state.favouriteCharacters = newFavList;
      localStorage.setItem("favChars", JSON.stringify(newFavList));
    },
    set(state, action) {
      state.favouriteCharacters = action.payload;
    },
  },
});

export const favouriteActions = favouriteSlice.actions;
export default favouriteSlice.reducer;
