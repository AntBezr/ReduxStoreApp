import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const cartSlice = createSlice({
  name: "cart",
  initialState, //initialState is equal initial state from the top 
  reducers: {
    addToCart: (state, action) => {
      if (state.length === 0) {
        state.push({ ...action.payload, quantity: 1 })
        console.log(state);
      } else {
        const index = state.findIndex(
          (product) => product.title === action.payload.title
        )
        if (index === -1) {
          state.push({ ...action.payload, quantity: 1 })
        } else {
          state[index].quantity++
        }
        console.log(state);
      }

    },
    removeItemFromCart: (state, action) => {
      const index = state.findIndex(
        (product) => product.title === action.payload.title
      );
      if (index !== -1) {
        if (state[index].quantity === 1) {
          state.splice(index, 1);
        } else {
          state[index].quantity--;
        }
      }
    }
  },
  extraReducers: (builder) => { },
})

export const { addToCart } = cartSlice.actions;
export const { removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer