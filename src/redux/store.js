import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "./moneySlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: { products: productsSlice, money: moneySlice },
});
