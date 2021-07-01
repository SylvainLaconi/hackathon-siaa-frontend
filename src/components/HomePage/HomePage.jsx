import React from 'react';
import styled from 'styled-components';
import Theme, { Container, StyledTitle } from '../assets/styles/Theme';
import welcome from '../assets/img/welcome.jpg';

const ComponentContainer = styled(Container)`
  margin-top: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${welcome});
  width: 100%;
  height: 100vh;
`;
const Text = styled.p`
  color: ${Theme.fiverrOrange};
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  padding-right: 5rem;
  font-size: 1.1rem;
`;

const HomePage = () => {
  return (
    <ComponentContainer flex column aiCenter>
      <StyledTitle
        style={{
          marginTop: '10rem',
          fontSize: '3rem',
          paddingRight: '5rem',
          color: '#003912',
        }}
      >
        {' '}
        Welcome on Community !
      </StyledTitle>
      <Text>The social network dedicated to freelancers</Text>
    </ComponentContainer>
  );
};

export default HomePage;
