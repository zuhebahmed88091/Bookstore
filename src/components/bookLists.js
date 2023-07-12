import React from 'react';
import Book from './book';
import BookAdd from './bookAdd';

const BookLists = () => {
  const books = [
    {
      title: 'The Lord of the rings',
      author: 'J.R.R. Tolkien',
      id: 1,
    },
    {
      title: 'A song of ice and fire',
      author: 'George R. R. Martin',
      id: 2,
    },
    {
      title: 'Harry Potter Series',
      author: 'J. K. Rowling',
      id: 3,
    },
  ];

  return (
    <section>
      <ul>
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
        ;
      </ul>
      <BookAdd />
    </section>
  );
};

export default BookLists;
