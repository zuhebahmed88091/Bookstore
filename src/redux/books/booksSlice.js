import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import apiUrl from './initial';

const initialState = {
  books: [],
  isLoading: false,
};

const getApiBooks = createAsyncThunk('books/getApiBooks', async () => {
  const response = await axios(apiUrl);
  return response.data;
});

const postApiBooks = createAsyncThunk('books/postBooks', async (book) => {
  const newBook = {
    item_id: uuid(),
    title: book[0],
    author: book[1],
    category: book[2],
  };

  const response = await axios.post(apiUrl, newBook);
  return response.data;
});

const removeBookFromApi = createAsyncThunk('books/removeBook', async (bookId) => {
  const response = await axios.delete(`${apiUrl}/${bookId}`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getApiBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getApiBooks.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      books: action.payload,
    }));
    builder.addCase(getApiBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(postApiBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postApiBooks.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(postApiBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(removeBookFromApi.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(removeBookFromApi.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(removeBookFromApi.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export const booksReducer = booksSlice.reducer;
export { getApiBooks, postApiBooks, removeBookFromApi };
