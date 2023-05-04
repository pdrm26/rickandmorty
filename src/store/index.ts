import { configureStore } from "@reduxjs/toolkit";

import favouriteReducer from "./favourite";

const store = configureStore({
  reducer: favouriteReducer,
});

export default store;
