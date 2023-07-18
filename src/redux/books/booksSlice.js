import { createSlice } from '@reduxjs/toolkit';
import Initialbooks from './initial';

const getNextItemId = (books) => {
  const maxId = Math.max(
    ...books.map((book) => Number(book.item_id.replace('item', ''))),
  );
  return `item${maxId + 1}`;
};

const storeAllBooks = () => {
  const localBooks = localStorage.getItem('Getbooks');
  const fromLocalBooks = JSON.parse(localBooks);

  if (localBooks && fromLocalBooks.length !== 0) {
    return fromLocalBooks;
  }
  return Initialbooks;
};

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: storeAllBooks(),
  },
  reducers: {
    addBook: (state, action) => {
      const { title, author, category } = action.payload;
      const newBook = {
        item_id: getNextItemId(state.books),
        title,
        author,
        category,
      };
      state.books = [...state.books, newBook];
    },
    removeBooks: (state, action) => {
      const itemId = action.payload;
      const stateUpdated = { ...state };
      stateUpdated.books = state.books.filter(
        (book) => book.item_id !== itemId,
      );
      return stateUpdated;
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const { addBook, removeBooks } = booksSlice.actions;
