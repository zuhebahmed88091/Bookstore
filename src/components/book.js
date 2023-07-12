import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <li>
      {title}
      {' '}
      by
      {' '}
      {author}
      {' '}
      <button type="submit">Remove</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
