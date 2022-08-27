import { configureStore } from "@reduxjs/toolkit";

import basketSlice from "./basketSlice";
import moneySlice from "./moneySlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: { products: productsSlice, money: moneySlice, basket: basketSlice },
});
