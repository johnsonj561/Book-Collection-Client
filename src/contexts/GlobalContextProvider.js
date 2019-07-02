import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContextProvider } from './NavigationContext';
import { SessionContextProvider } from './SessionContext';
import { BooksContextProvider } from './BooksContext';

const GlobalContextProvider = props => (
  <SessionContextProvider>
    <NavigationContextProvider>
      <BooksContextProvider>
        {props.children}
      </BooksContextProvider>
    </NavigationContextProvider>
  </SessionContextProvider>
);

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContextProvider;
