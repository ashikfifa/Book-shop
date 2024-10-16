import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import wishlistReducer from './wishListSlice'; 

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    wishlist: wishlistReducer,
  },
});
