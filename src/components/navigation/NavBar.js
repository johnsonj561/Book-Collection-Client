import React from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import { Spacer, NavLabel } from '../styled-components';
import NavBarIcon from './NavBarIcon';
import AccountControl from './AccountControl';
import useNavigation from '../../hooks/useNavigation';

const NavBar = () => {
  const { navItems, selectedNavItem, setSelectedNavItem } = useNavigation();

  return (
    <Menu>
      {/* Left Nav Items */}
      {navItems.map(item => (
        <Menu.Item
          item={item}
          key={item.id}
          name={item.id}
          active={selectedNavItem.id === item.id}
          onClick={setSelectedNavItem}
        >
          {item.label
            && <NavLabel>{item.label}</NavLabel>
          }
          {item.icon
            && <NavBarIcon name={item.icon} size="large" tooltip={item.tooltip} />
          }
        </Menu.Item>
      ))}

      {/* Horizontal Spacer */}
      <Spacer />

      {/* Account Controls */}
      <AccountControl />
    </Menu>
  );
};


export default NavBar;
