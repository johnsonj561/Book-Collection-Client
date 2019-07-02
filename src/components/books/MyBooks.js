import React from 'react';
import { SectionHeader } from '../styled-components';
import BookList from './BookList';
import BookListPlaceholder from './BookListPlaceholder';
import useBooks from '../../hooks/useBooks';

const MyBooks = () => {
  const { books, addBook } = useBooks();
  console.log('Using books', books, addBook);
  const onAddBook = () => {
    addBook({ title: 'My New Book', description: 'Some random description' });
  };

  return (
    <div>
      <SectionHeader>My Books</SectionHeader>
      {!books.length && <BookListPlaceholder onAddBook={onAddBook} />}
      {!!books.length && <BookList onAddBook={onAddBook} />}
    </div>

  );
};

export default MyBooks;
