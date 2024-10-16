// src/common/redux/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      // Check if the item is already in the wishlist
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
