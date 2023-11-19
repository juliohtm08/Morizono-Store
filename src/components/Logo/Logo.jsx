import React from 'react';
import logoImage from './imgLogo/Logo-morizono-store.png';

function Logo() {
  return ( 
    <img src={logoImage} alt="logo-morizono-store" className="logo" style={{ height: '70px' }} />
  );
}

export default Logo;
