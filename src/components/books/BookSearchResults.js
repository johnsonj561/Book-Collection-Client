import React from 'react';
// import styled from 'styled-components';
import {
  List, Header, Segment,
} from 'semantic-ui-react';
import useBooks from '../../hooks/useBooks';

const BookSearchResults = () => {
  const { searchResults } = useBooks();
  console.log('SEARCH RESULTS', searchResults);

  if (!searchResults.length) {
    return null;
  }

  return (
    <Segment>
      <Header icon="book" content="Search Results" />
      <List>
        {searchResults.map(() => (
          <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Book Title</List.Header>
              <List.Description as="a">Author and Date</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default BookSearchResults;
