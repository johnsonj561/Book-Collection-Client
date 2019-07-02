import React from 'react';
import { List, Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BookListItem from './BookListItem';
import useBooks from '../../hooks/useBooks';
import useNavigation from '../../hooks/useNavigation';

const BookList = (props) => {
  const { books } = useBooks();
  const { navigate } = useNavigation();
  const onViewAll = () => navigate('my-books');
  return (
    <Segment>
      <List divided relaxed>
        {books.map((book, idx) => <BookListItem book={book} key={idx} />)}
      </List>
      <Button.Group widths="2">
        <Button secondary onClick={onViewAll}>View All</Button>
        <Button primary onClick={props.onAddBook}>Add a Book</Button>
      </Button.Group>
    </Segment>
  );
};

BookList.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookList;
