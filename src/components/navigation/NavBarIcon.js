import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const NavbarIcon = (props) => {
  const { tooltip, name } = props;
  return (
    <Popup
      trigger={(
        <StyledIcon
          name={name}
          size="large"
        />
      )}
      content={tooltip}
      on="hover"
    />
  );
};

const StyledIcon = styled(Icon)`
  && {
    margin: 0px;
  }
`;

export default NavbarIcon;
