import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import Logo from '../Logo/Logo';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo /> {/* Componente do logotipo */}
        <SearchBar /> {/* Componente da barra de pesquisa */}
        <CartButton /> {/* Componente do botão do carrinho */}
      </div>
    </header>
  );
}
export default Header;
