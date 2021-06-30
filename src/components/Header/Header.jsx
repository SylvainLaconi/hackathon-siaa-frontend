/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { RiLogoutCircleRLine } from 'react-icons/ri/';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ToastContainer, toast } from 'react-toastify';
import Theme, { Container, StyledTitle } from '../assets/styles/Theme';
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
    if (
      loggedName === 'doe' ||
      loggedName === 'green' ||
      loggedName === 'wilson'
    ) {
      setUserName(loggedName);
      setIsLogged(true);
      toast.success('You are connected');
    } else {
      toast.error('Unknown account');
    }
  };

  const HandleLoggout = () => {
    setUserName('');
    setIsLogged(false);
  };

  return (
    <HeaderContainer flex aiCenter>
      <div style={{ display: 'flex', width: '30%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '50%',
          }}
        >
          <img
            src={fiverrLogo}
            alt="logo - fiverr"
            style={{ width: '5rem', height: '3rem' }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '50%',
          }}
        >
          <StyledTitle
            style={{
              color: `${Theme.fiverrGreen}`,
              margin: '0',
            }}
          >
            Community
          </StyledTitle>
        </div>
      </div>
      <div style={{ display: 'flex', width: '40%' }}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>

      {!isLogged ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '30%',
            paddingRight: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '0.5rem',
            }}
          >
            <AccountCircleIcon />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '0.5rem',
            }}
          >
            <StyledInput
              placeholder="Login ..."
              value={loggedName}
              onChange={HandleChange}
            />
          </div>

          <SmallButton onClick={HandleLogging}>Sign in</SmallButton>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '30%',
            marginRight: '1rem',
          }}
        >
          <LogOutIcon onClick={HandleLoggout} />
        </div>
      )}
    </HeaderContainer>
  );
}
