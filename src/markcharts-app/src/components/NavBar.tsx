import React from 'react';
import AppBar from '../styled-components/AppBar';
import styled from '../styled';

const Title = styled.div`
    font-size: 2rem;
    margin: 20px;
    color: white;
`;

const NavBar: React.FC = () => (
  <AppBar>
    <Title>MarkCharts</Title>
  </AppBar>
);

export default NavBar;
