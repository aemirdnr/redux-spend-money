import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    balance: 100000000000,
  },
  reducers: {
    buyProduct: (state, action) => {
      state.balance -= action.payload;
    },
    sellProduct: (state, action) => {
      state.balance += action.payload;
    },
  },
});

export const { buyProduct, sellProduct } = moneySlice.actions;

export default moneySlice.reducer;
