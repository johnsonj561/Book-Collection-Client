import React from 'react';
import styled from 'styled-components';
import { PageContainer, GridSection } from '../components/styled-components';
import BookForm from '../components/books/BookForm';
import BookSearchResults from '../components/books/BookSearchResults';


const BooksPage = () => (
  <PageContainer>
    <DashboardGrid>
      <GridSection>
        <BookForm />
      </GridSection>
      <GridSection>
        <BookSearchResults />
      </GridSection>
    </DashboardGrid>
  </PageContainer>
);

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default BooksPage;
