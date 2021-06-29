/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { RiLogoutCircleRLine } from 'react-icons/ri/';
import Theme, { Container } from '../assets/styles/Theme';
import fiverrLogo from '../assets/img/fiverrLogo.svg';
import StyledInput from '../assets/styles/Input';
import { SmallButton } from '../assets/styles/Button';
import UserContext from '../assets/UserContext';

const HeaderContainer = styled(Container)`
  justify-content: space-between;
  border-bottom: solid 1px ${Theme.fiverrDarkGray};
  margin-bottom: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1;
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
  cursor: pointer;
`;

export default function Header() {
  const { isLogged, setIsLogged, setUserName } = useContext(UserContext);
  const [loggedName, setLoggedName] = useState('');

  const HandleChange = (e) => {
    setLoggedName(e.target.value);
  };

  const HandleLogging = () => {
    setUserName(loggedName);
    setIsLogged(true);
  };

  const HandleLoggout = () => {
    setUserName('');
    setIsLogged(false);
  };

  return (
    <HeaderContainer flex aiCenter>
      <FiverrLogo src={fiverrLogo} />
      {!isLogged ? (
        <div
          style={{
            width: '5 rem',
            marginRight: '1rem',
          }}
        >
          <StyledInput
            placeholder="Login ..."
            value={loggedName}
            onChange={HandleChange}
          />

          <SmallButton onClick={HandleLogging}>Logging</SmallButton>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '15 rem',
            marginRight: '1rem',
          }}
        >
          <StyledInput placeholder="Search ..." />
          <LogOutIcon onClick={HandleLoggout} />
        </div>
      )}
    </HeaderContainer>
  );
}
