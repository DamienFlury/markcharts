import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '../styled-components/AppBar';
import styled from '../styled';

const Title = styled(Link)`
    font-size: 2rem;
    margin: 20px 40px 20px 20px;
    color: white;
    text-decoration: none;
`;


const StyledLink = styled(Link)`
    color: white;
    margin-right: 20px;
    text-decoration: none;
    font-size: 1.3rem;
`;


const NavBar: React.FC = () => (
  <AppBar>
    <Title to="/">MarkCharts</Title>
    <StyledLink to="/exams">Exams</StyledLink>
  </AppBar>
);

export default NavBar;
