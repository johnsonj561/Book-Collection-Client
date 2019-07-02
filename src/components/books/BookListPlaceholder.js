import React from 'react';
import {
  Button, Header, Icon, Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const BookListPlaceholder = (props) => {
  const { onAddBook } = props;
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="book" size="massive" />
        It looks like you haven't read any books yet!
      </Header>
      <Segment.Inline>
        <Button primary onClick={onAddBook}>Add a Book</Button>
      </Segment.Inline>
    </Segment>
  );
};

BookListPlaceholder.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookListPlaceholder;
