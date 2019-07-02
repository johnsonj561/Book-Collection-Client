import { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const useBooks = () => {
  const [state, setState] = useContext(BooksContext);

  const addBook = (book) => {
    setState((state) => {
      const books = [...state.books, book];
      return { ...state, books };
    });
  };

  return {
    books: state.books,
    addBook,
  };
};

export default useBooks;
