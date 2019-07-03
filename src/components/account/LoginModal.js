import React, { useState, useEffect } from 'react';
import {
  Form, Modal, Button, Header, Icon, Message, Grid, Divider,
} from 'semantic-ui-react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useSession from '../../hooks/useSession';

const defaultForm = {
  username: '',
  password: '',
};

const defaultMessage = { content: '' };

const LoginModal = (props) => {
  const { open, onClose } = props;

  const { loginUser } = useSession();
  const [message, setMessage] = useState(defaultMessage);
  const [formData, setFormData] = useState(defaultForm);
  const [loading, setLoading] = useState(false);

  const onInputChange = key => (e, { value }) => {
    setFormData(form => ({ ...form, [key]: value }));
  };

  useEffect(() => {
    if (!open) {
      setFormData(defaultForm);
      setMessage(defaultMessage);
    }
  }, [open]);


  const onLoginFailure = (error) => {
    const content = _.get(error, 'response.data.message', 'Unexpected login error');
    setMessage({ error: true, content });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    loginUser(formData.username, formData.password)
      .then(onClose)
      .catch(onLoginFailure)
      .then(() => setLoading(false));
  };

  return (
    <StyledModal open={open} closeIcon onClose={onClose}>
      <Modal.Content>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form action="" onSubmit={onSubmit}>
              <Form.Input
                icon="user"
                iconPosition="left"
                autoFocus
                label="Username"
                placeholder="Username"
                value={formData.username}
                onChange={onInputChange('username')}
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                value={formData.password}
                onChange={onInputChange('password')}
              />
              <InvisibleButton type="submit" />
            </Form>
            <Button.Group widths="2">
              <Button type="button" color="red" onClick={onClose} disabled={loading}>
                <Icon name="close" />
                Cancel
              </Button>
              <Button type="button" color="green" onClick={onSubmit} loading={loading} disabled={loading}>
                <Icon name="checkmark" />
                Submit
              </Button>
            </Button.Group>
          </Grid.Column>

          {!message.content && (
            <Grid.Column verticalAlign="middle">
              <StackedButtonGroup>
                <Button content="Create An Account" icon="signup" />
                <Button content="Recover Your Password" icon="signup" />
                <Button color="facebook">
                  <Icon name="facebook" />
                    Register With Facebook
                </Button>
              </StackedButtonGroup>
            </Grid.Column>
          )}

          {!!message.content && (
            <Grid.Column verticalAlign="middle">
              <StyledMessage
                success={message.success}
                error={message.error}
                size="small"
                hidden={!message.content}
              >
                <Message.Content>
                  {message.content}
                </Message.Content>
              </StyledMessage>
            </Grid.Column>
          )}

        </Grid>

        <Divider vertical>Or</Divider>

      </Modal.Content>
    </StyledModal>
  );
};

LoginModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

LoginModal.defaultProps = {
  open: false,
};

const StyledModal = styled(Modal)`
  &&& {
    width: 600px;
  }
`;

const StackedButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-between;
`;

const StyledMessage = styled(Message)`
  &&& {

  }
`;

const InvisibleButton = styled.button`
  display: none;
`;


export default LoginModal;
