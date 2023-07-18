import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import BookAdd from './bookAdd';

const BookLists = () => {
  const bookLists = useSelector((store) => store.books.books);

  const addToLocalStorage = (books) => {
    localStorage.setItem('Getbooks', JSON.stringify(books));
  };

  useEffect(() => {
    addToLocalStorage(bookLists);
  }, [bookLists]);

  return (
    <section>
      <ul>
        {bookLists.map((book) => (
          <Book key={book.item_id} singleBook={book} />
        ))}
      </ul>
      <BookAdd />
    </section>
  );
};

export default BookLists;
