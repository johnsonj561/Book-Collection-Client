import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Form, Dropdown, Message, Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const motivationOptions = [
  'Reason 1',
  'Reason 2',
];

const defaultForm = {
  title: '',
  dateRead: '',
  reason: motivationOptions[0],
  author: '',
  review: 5,
};


const AddBookForm = () => {
  const [formData, setFormData] = useState(defaultForm);

  const onTextInputChange = key => (e, { value }) => {
    setFormData({ ...formData, [key]: value });
  };

  const [message, setMessage] = useState();

  const onSubmit = () => {
    setMessage({ content: 'Your new chart has been created', success: true });
  };

  return (
    <div>
      <StyledForm onSubmit={onSubmit} widths="equal">
        <Form.Input
          label="Title"
          value={formData.title}
          onChange={onTextInputChange('title')}
        />
        <Form.Input
          label="Date Read"
          value={formData.dateRead}
          onChange={onTextInputChange('dateRead')}
        />
        <Dropdown
          fluid
          selection
          options={motivationOptions}
          onChange={onTextInputChange('reason')}
          value={formData.reason}
        />
        <StyledButton type="submit" onSubmit={onSubmit}>Submit</StyledButton>
      </StyledForm>
      <Message loading visible floating hidden={!message} {...message} />
    </div>
  );
};

const StyledForm = styled(Form)`
  && {
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
`;

const StyledButton = styled(Button)`
  && {
    margin: 10px 0px;
  }
`;

AddBookForm.propTypes = {};

export default AddBookForm;
