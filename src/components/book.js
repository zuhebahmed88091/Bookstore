import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromApi, getApiBooks } from '../redux/books/booksSlice';
import Button from './button';
import './styles/book.css';

const Book = ({ singleBook }) => {
  const dispatch = useDispatch();
  const handleRemove = async () => {
    await dispatch(removeBookFromApi(singleBook.id));
    await dispatch(getApiBooks());
  };
  const progressBarColor = '#307bbe';
  return (
    <li className="list-wrap">
      <article className="book-details">
        <div className="book-info">
          <p className="category">{singleBook.category}</p>
          <p className="title">{singleBook.title}</p>
          <p className="author">{singleBook.author}</p>
        </div>
        <div className="all-btn">
          <Button className="comment-btn" label="Comments" />
          <div className="vertical-divider" />
          <Button className="remove-btn" onClick={() => handleRemove()} label="Remove" />
          <div className="vertical-divider" />
          <Button className="edit-btn" label="Edit" />
        </div>
      </article>
      <article className="progressbar-wrap">
        <div className="circle-bar">
          <CircularProgressbar
            value={45}
            styles={buildStyles({
              pathColor: progressBarColor,
              trailColor: '#e8e8e8', // Replace with your desired trail color
              textColor: progressBarColor, // Replace with your desired text color
            })}
          />
          {/* <CircularProgressbar value={45} /> */}
        </div>
        <div className="progress-details">
          <p className="bar-percentage">45%</p>
          <p className="bar-completed">Completed</p>
        </div>
      </article>
      <article className="chapter-wrap">
        <div className="current-chapter-wrap">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="book-chapter">Chapter 13</p>
        </div>
        <Button className="update-progress-btn" label="UPDATE PROGRESS" />
      </article>
    </li>
  );
};

Book.propTypes = {
  singleBook: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
