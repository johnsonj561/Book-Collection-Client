import { useContext } from 'react';
import { NavigationContext } from '../contexts/NavigationContext';

const useNavigation = () => {
  const [state, setState, navItems, history] = useContext(NavigationContext);

  const navigate = (path) => {
    history.push(path);
    const selectedNavItem = navItems.find(item => item.path === path);
    setState(state => ({ ...state, selectedNavItem }));
  };

  const setSelectedNavItem = (e, { item }) => {
    history.push(item.path);
    setState(state => ({ ...state, selectedNavItem: item }));
  };

  return {
    navItems,
    selectedNavItem: state.selectedNavItem,
    setSelectedNavItem,
    navigate,
  };
};

export default useNavigation;
