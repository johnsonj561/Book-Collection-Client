import { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import * as authService from '../services/auth';

const useSession = () => {
  const [state, setState] = useContext(SessionContext);

  const loginUser = async (username, password) => {
    const resp = await authService.loginUser(username, password);
    setState(resp);
  };

  const logoutUser = () => {
    authService.logoutUser();
    setState({});
  };

  return {
    username: state.username,
    loggedIn: !!state.username,
    loginUser,
    logoutUser,
  };
};

export default useSession;
