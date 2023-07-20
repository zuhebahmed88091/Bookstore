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

  const booksArr = Object.keys(books).flatMap((id) => books[id].map((book) => ({ ...book, id })));

  return (
    <section>
      {isLoading ? (
        <p>
          Loading...
        </p>
      ) : (
        <div>
          <ul>
            {booksArr.map((book) => (
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
