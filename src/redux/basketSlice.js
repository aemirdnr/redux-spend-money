import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
    cost: 0,
  },
  reducers: {
    addToReceipt: (state, action) => {
      const product = action.payload;

      const item = state.items.find(
        (item) => item.productName === product.productName
      );

      item ? (item.productCount += 1) : state.items.push(product);
      state.cost += product.productPrice * product.productCount;
    },
    removeFromReceipt: (state, action) => {
      const product = action.payload;

      const item = state.items.find(
        (item) => item.productName === product.productName
      );

      item.productCount -= 1;

      if (item.productCount === 0) {
        state.items = state.items.filter(
          (item) => item.productName !== product.productName
        );
      }

      state.cost -= product.productPrice * product.productCount;
    },
  },
});

export const { addToReceipt, removeFromReceipt } = basketSlice.actions;

export default basketSlice.reducer;
