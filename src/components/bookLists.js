import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApiBooks } from '../redux/books/booksSlice';
import Book from './book';
// import BookAdd from './bookAdd';

const BookLists = () => {
  const dispatch = useDispatch();
  const bookLists = useSelector((store) => store.books.books);
  const isLoading = useSelector((store) => store.books.isLoading);

  useEffect(() => {
    dispatch(getApiBooks);
  }, [dispatch]);

  return (
    <section>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {bookLists.map((book) => (
            <Book key={book.item_id} singleBook={book} />
          ))}
        </ul>
      )}
      {/* <BookAdd /> */}
    </section>
  );
};

export default BookLists;
