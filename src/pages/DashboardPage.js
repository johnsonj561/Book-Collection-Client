import React from 'react';
import styled from 'styled-components';
import { PageContainer, GridSection } from '../components/styled-components';
import MyBooks from '../components/books/MyBooks';

const HomePage = () => (
  <PageContainer>
    <DashboardGrid>
      <GridSection>
        <MyBooks />
      </GridSection>
      <GridSection>
        <MyBooks />
      </GridSection>
    </DashboardGrid>
  </PageContainer>
);

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 750px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export default HomePage;
