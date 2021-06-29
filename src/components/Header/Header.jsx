/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { RiLogoutCircleRLine } from 'react-icons/ri/';
import Theme, { Container } from '../assets/styles/Theme';
import fiverrLogo from '../assets/img/fiverrLogo.svg';
import Input from '../assets/styles/Input';
import { SmallButton } from '../assets/styles/Button';
import UserContext from '../assets/UserContext';

export default function Header() {
  const { isLogged, setIsLogged, setUserId } = useContext(UserContext);
  const [UserProfile, setUserProfile] = useState('');

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

  const HandleChange = (e) => {
    setUserProfile(e.target.value);
  };

  const HandleLogging = () => {
    setUserId(UserProfile);
    setIsLogged(true);
  };

  const HandleLoggout = () => {
    setUserId('');
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
          <Input
            placeholder="Login ..."
            value={UserProfile}
            onChange={HandleChange}
          />

          <SmallButton onClick={HandleLogging}>Ok</SmallButton>
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
          <Input placeholder="Search ..." />
          <LogOutIcon onClick={HandleLoggout} />
        </div>
      )}
    </HeaderContainer>
  );
}
