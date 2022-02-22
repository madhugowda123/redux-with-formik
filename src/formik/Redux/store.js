import { configureStore } from "@reduxjs/toolkit";
import { newReducers } from "./index";

//createing store
const store = configureStore({
  reducer: newReducers,
});
export default store;
