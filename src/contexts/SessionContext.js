import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  username: '',
  loggedIn: false,
};

const SessionContext = createContext([initialState, () => {}]);

const SessionContextProvider = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <SessionContext.Provider value={[state, setState]}>
      {props.children}
    </SessionContext.Provider>
  );
};

SessionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SessionContext, SessionContextProvider };
