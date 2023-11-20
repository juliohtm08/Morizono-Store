import React from 'react';
import logoImage from './imgLogo/Logo-morizono-store.png';
import './logo.css';

function Logo() {
  return ( 
    <img src={logoImage} alt="logo-morizono-store" className="logo"/>
  );
}

export default Logo;
