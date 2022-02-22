import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  data: [],
};

//Reducer with action
const loginSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export const loginCreate = loginSlice.reducer;
