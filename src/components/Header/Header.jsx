import React from 'react';
import styled from 'styled-components';
import { RiLogoutCircleRLine } from 'react-icons/ri/';
import Theme, { Container } from '../assets/styles/Theme';
import fiverrLogo from '../assets/img/fiverrLogo.svg';

export default function Header() {
  const HeaderContainer = styled(Container)`
    justify-content: space-between;
    border-bottom: solid 1px ${Theme.fiverrDarkGray};
    margin-bottom: 10px;
    width: 100%;
  `;
  const FiverrLogo = styled.img`
    width: 5rem;
    height: 3rem;
    margin-left: 10rem;
  `;

  const LogOutIcon = styled(RiLogoutCircleRLine)`
    width: 1.5rem;
    height: 1.5rem;
    color: ${Theme.fiverrGreenMedium};
    margin-right: 2rem;
    cursor: pointer;:;
  `;
  return (
    <HeaderContainer flex aiCenter>
      <FiverrLogo src={fiverrLogo} />
      <LogOutIcon />
    </HeaderContainer>
  );
}
