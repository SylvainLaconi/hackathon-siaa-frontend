import React from 'react';
import fiverrLogo from '../assets/img/fiverrLogo.svg';

const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
      }}
    >
      <img
        src={fiverrLogo}
        alt="logo - fiverr"
        style={{ width: '5rem', height: '3rem' }}
      />
    </div>
  );
};

export default Logo;
