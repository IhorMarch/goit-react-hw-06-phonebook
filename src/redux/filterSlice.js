import { createSlice } from "@reduxjs/toolkit";





const filtersSlice = createSlice({
  name: "filter",
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      return action.payload;
    },
  },
});



export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
