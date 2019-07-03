import React from 'react';
import { Header } from 'semantic-ui-react';
import BookList from './BookList';
import BookListPlaceholder from './BookListPlaceholder';
import useBooks from '../../hooks/useBooks';
import useNavigation from '../../hooks/useNavigation';

const MyBooks = () => {
  const { books } = useBooks();
  const { navigate } = useNavigation();
  const onAddBook = () => navigate('add-book');
  return (
    <div>
      <Header content="My Books" />
      {!books.length && <BookListPlaceholder onAddBook={onAddBook} />}
      {!!books.length && <BookList onAddBook={onAddBook} />}
    </div>

  );
};

export default MyBooks;
