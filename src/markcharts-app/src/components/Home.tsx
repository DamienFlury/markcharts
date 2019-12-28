import React from 'react';
import styled from '../styled';
import Paper from '../styled-components/Paper';
import Create from '../images/create.jpg';

const Wrapper = styled.div`
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.div`
    font-size: 1.8rem;
`;

const Card = styled(Paper)`
    width: 400px;
    height: 300px;
    color: white;
    margin: 20px;
    padding: 20px;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Create});
    /* background: url(${Create}); */
    background-size: cover;
`;

const Home: React.FC = () => (
  <Wrapper>
    <Card>
      <Title>Create Exam</Title>
    </Card>
  </Wrapper>
);

export default Home;
