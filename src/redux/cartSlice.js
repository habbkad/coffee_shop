import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    orders: [],
    cost: 0,
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];

      state.cost = state.cost + action.payload.cost;
    },
    removeOrder: (state, action) => {
      const newOrders = state.orders.filter(
        (item) => item.name != payload.name
      );
      state.orders = newOrders;
    },
    increaseOrder: (state, action) => {
      state.orders = state.orders.map((item) => {
        if (item.name == action.payload.name) {
          item.number++;
          return item;
        }
        return item;
      });
    },
    decreaseOrder: (state, action) => {
      state.orders = state.orders.map((item) => {
        if (item.name == action.payload.name) {
          item.number--;
          return item;
        }
        return item;
      });
    },
    totalCost: (state, action) => {
      let cost = 0;
      if (state.orders) {
        state.orders.map((item) => {
          cost += item.cost;
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addOrder,
  removeOrder,
  increaseOrder,
  decreaseOrder,
  totalCost,
} = cartSlice.actions;

export default cartSlice.reducer;
