import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromApi } from '../redux/books/booksSlice';
import Button from './button';

const Book = ({ singleBook }) => {
  const dispatch = useDispatch();
  const handleRemove = (bookId) => {
    dispatch(removeBookFromApi(bookId));
  };
  return (
    <section className="list-wrap">
      <div className="book-info">
        <div className="title">{singleBook.title}</div>
        <div className="author">{singleBook.author}</div>
        <div className="category">{singleBook.category}</div>
      </div>
      <Button className="remove-btn" onClick={() => handleRemove(singleBook.item_id)} label="Remove" />
    </section>
  );
};

Book.propTypes = {
  singleBook: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
