import React from 'react';

const BookAdd = () => (
  <form>
    <input type="text" name="title" />
    <input type="text" name="author" />
    <button type="submit">Add Book</button>
  </form>
);

export default BookAdd;
