import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [
        {
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
        },
      ],
    }),
    removeBooks: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload.id),
    }),
  },
});

export const booksReducer = booksSlice.reducer;
export const { addBook, removeBooks } = booksSlice.actions;
