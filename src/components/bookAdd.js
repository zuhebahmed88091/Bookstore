import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import Button from './button';

const BookAdd = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !category.trim()) return;
    dispatch(addBook({ title, author, category }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="text"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <Button className="add-btn" onClick={handleAddBook} label="Add Book" />
    </form>
  );
};

export default BookAdd;
