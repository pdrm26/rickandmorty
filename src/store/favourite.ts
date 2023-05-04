import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: FavouriteState = { favouriteCharacters: [] };

const favouriteSlice = createSlice({
  name: "favourties",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Character>) {
      const isCharacterExist = state.favouriteCharacters.find(
        (character) => character.id === action.payload.id
      );
      if (!isCharacterExist) {
        const newFavList = [action.payload, ...state.favouriteCharacters];
        state.favouriteCharacters = newFavList;

        localStorage.setItem("favChars", JSON.stringify(newFavList));
      }
    },
    remove(state, action: PayloadAction<number>) {
      const newFavList = state.favouriteCharacters.filter(
        (character) => character.id !== action.payload
      );
      state.favouriteCharacters = newFavList;
      localStorage.setItem("favChars", JSON.stringify(newFavList));
    },
    set(state, action: PayloadAction<Character[]>) {
      state.favouriteCharacters = action.payload;
    },
  },
});

export const favouriteActions = favouriteSlice.actions;
export default favouriteSlice.reducer;
