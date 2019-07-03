import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  books: [],
  searchResults: [],
};

const BooksContext = createContext([initialState, () => {}]);

const BooksContextProvider = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <BooksContext.Provider value={[state, setState]}>
      {props.children}
    </BooksContext.Provider>
  );
};

BooksContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BooksContext, BooksContextProvider };
