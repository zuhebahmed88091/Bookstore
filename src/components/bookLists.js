import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApiBooks } from '../redux/books/booksSlice';
import Book from './book';
import BookAdd from './bookAdd';
import './styles/bookLists.css';

const BookLists = () => {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getApiBooks());
  }, [dispatch]);

  const booksArr = Object.keys(books).flatMap((id) => books[id].map((book) => ({ ...book, id })));

  return (
    <section className="booklists-container">
      {isLoading ? (
        <div className="loading-wrap">
          <div className="loading" />
        </div>
      ) : (
        <div className="ul-container">
          <ul className="book-ul">
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
