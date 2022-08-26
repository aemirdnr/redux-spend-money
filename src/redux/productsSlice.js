import { createSlice } from "@reduxjs/toolkit";
import data from "../api/data.json";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: data,
  },
  reducers: {},
});

export default productsSlice.reducer;
