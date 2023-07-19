import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApiBooks } from '../redux/books/booksSlice';
import Book from './book';
import BookAdd from './bookAdd';

const BookLists = () => {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getApiBooks());
  }, [dispatch]);

  const Allbooks = Object.entries(books).reduce((bookarray, [id, listitem]) => {
    const booksWithId = listitem.map((book) => ({ ...book, id }));
    return [...bookarray, ...booksWithId];
  }, []);

  return (
    <section>
      {isLoading ? (
        <p>
          Loading...
        </p>
      ) : (
        <div>
          <ul>
            {Allbooks.map((book) => (
              <Book key={book.id} singleBook={book} />
            ))}
          </ul>
          <BookAdd />
        </div>
      )}
    </section>
  );
};

export default BookLists;
