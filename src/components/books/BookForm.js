import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Form, Message, Button, Icon, Header, Modal, Segment,
} from 'semantic-ui-react';


const defaultForm = {
  title: '',
  dateRead: '',
  author: '',
  description: '',
  review: 0,
};


const BookForm = () => {

  const [formData, setFormData] = useState(defaultForm);
  const [loading, setLoading] = useState(false);

  const onTextInputChange = key => (e, { value }) => {
    setFormData({ ...formData, [key]: value });
  };

  const [message, setMessage] = useState();

  const onSubmit = () => {
    setLoading(true);
    setMessage({ content: 'Your new chart has been created', success: true });
  };

  return (
    <Segment>
      <Header icon="book" content="Add a New Book" />
      <StyledForm onSubmit={onSubmit} widths="equal">
        <Form.Input
          label="Title"
          value={formData.title}
          onChange={onTextInputChange('title')}
        />
        <Form.Input
          label="Author"
          value={formData.author}
          onChange={onTextInputChange('author')}
        />
        <Form.Input
          label="Date Read"
          value={formData.dateRead}
          onChange={onTextInputChange('dateRead')}
        />
        <Form.TextArea
          label="Description"
          value={formData.description}
          onChange={onTextInputChange('description')}
        />
        <InvisibleButton type="submit" />
      </StyledForm>
      <Message visible floating hidden={!message} {...message} />

      {/* Button Group */}
      <Button.Group widths="2">
        <Button type="button" secondary disabled={loading}>
          <Icon name="close" />
          Cancel
        </Button>
        <Button type="button" primary onClick={onSubmit} loading={loading} disabled={loading}>
          <Icon name="checkmark" />
          Submit
        </Button>
      </Button.Group>
    </Segment>
  );
};

const StyledForm = styled(Form)`
  && {
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
`;

const InvisibleButton = styled.button`
  display: none;
`;

export default BookForm;
