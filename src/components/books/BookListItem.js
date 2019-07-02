import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const BookListItem = (props) => {
  const { title, description } = props.book;
  return (
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{title}</List.Header>
        <List.Description as="a">{description}</List.Description>
      </List.Content>
    </List.Item>
  );
};

BookListItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookListItem;
