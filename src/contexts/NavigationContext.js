import React, { createContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const navItems = [
  {
    id: 'dashboard',
    path: 'dashboard',
    label: 'Dashboard',
  },
  {
    id: 'my-books',
    path: 'my-books',
    label: 'My Books',
  },
  {
    id: 'my-wishlist',
    path: 'my-wishlist',
    label: 'My Wishlist',
  },
];

const NavigationContext = createContext([{}, () => {}, []]);

const initialState = {
  selectedNavItem: navItems[0],
};

const NavigationContextProvider = (props) => {
  const { children, history } = props;
  const [state, setState] = useState(initialState);
  return (
    <NavigationContext.Provider value={[state, setState, navItems, history]}>
      {children}
    </NavigationContext.Provider>
  );
};

NavigationContextProvider.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

const ProviderWithRouter = withRouter(NavigationContextProvider);

export { NavigationContext, ProviderWithRouter as NavigationContextProvider };
