import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLabel } from '../styled-components';
import useSession from '../../hooks/useSession';
import LoginModal from '../account/LoginModal';

const AccountControl = () => {
  const { loggedIn, logoutUser } = useSession();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const onLabelClick = () => {
    if (loggedIn) {
      logoutUser();
    } else {
      setLoginModalOpen(true);
    }
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const label = loggedIn ? 'Logout' : 'Login';
  return (
    <>
      <LoginModal
        open={loginModalOpen}
        onClose={closeLoginModal}
      />
      <Menu.Item onClick={onLabelClick}>
        <NavLabel>{label}</NavLabel>
      </Menu.Item>
    </>
  );
};

export default AccountControl;
