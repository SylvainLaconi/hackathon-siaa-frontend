import React from 'react';
import styled from 'styled-components';
import Theme from '../assets/styles/Theme';
import Logo from './Logo';
import Copyright from './Copyright';
import Icons from './Icons';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: solid 1px ${Theme.fiverrDarkGray};
  margin-top: 10px;
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Logo />
      <Copyright />
      <Icons />
    </FooterContainer>
  );
}
