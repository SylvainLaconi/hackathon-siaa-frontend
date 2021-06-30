import React from 'react';
import styled from 'styled-components';
import Theme, { Container, StyledTitle } from '../assets/styles/Theme';
import welcome from '../assets/img/welcome.jpg';

const ComponentContainer = styled(Container)`
  margin-top: 3%;
`;
const WelcomePicture = styled.img`
  width: 60%;
`;
const Text = styled.p`
  color: ${Theme.fiverrOrange};
  font-family: 'Arial', sans-serif;
  font-weight: 500;
`;

const HomePage = () => {
  return (
    <ComponentContainer flex column aiCenter acCenter jcCenter>
      <StyledTitle style={{ margin: 'O' }}> Welcome on Community !</StyledTitle>
      <Text>Please login to discover our strong and active community</Text>
      <WelcomePicture src={welcome} />
    </ComponentContainer>
  );
};

export default HomePage;
