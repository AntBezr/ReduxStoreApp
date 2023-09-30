import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice'
import cartReducer from "../features/cardSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  devTools: true
});
