import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getApiBooks, postApiBooks } from '../redux/books/booksSlice';
import Button from './button';
import './styles/form.css';

const BookAdd = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = async (event) => {
    event.preventDefault();
    if (!title.trim() || !author.trim() || !category.trim()) return;

    await dispatch(postApiBooks([title, author, category]));
    setTitle('');
    setAuthor('');
    setCategory('');
    await dispatch(getApiBooks());
  };

  return (
    <div className="form-wrap">
      <h1 className="heading">Add New Book</h1>
      <form className="form-container">
        <input
          type="text"
          name="title"
          className="title-class"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          className="author-class"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <input
          type="text"
          name="category"
          className="category-class"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <Button className="add-btn" onClick={handleAddBook} label="Add Book" />
      </form>
    </div>
  );
};

export default BookAdd;
