import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'category',
  initialState: {
    category: [],
  },
  reducers: {
    checkCategoryStatus: (state) => ({
      ...state,
      category: 'Under Construction',
    }),
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const { checkCategoryStatus } = categoriesSlice.actions;
