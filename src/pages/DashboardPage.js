import React from 'react';
import styled from 'styled-components';
import { PageContainer, PageHeader } from '../components/styled-components';
import MyBooks from '../components/books/MyBooks';

const HomePage = () => (
  <PageContainer>
    {/* <PageHeader>Dashboard</PageHeader> */}
    <DashboardGrid>
      <MyBooks />
    </DashboardGrid>
  </PageContainer>
);

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default HomePage;
