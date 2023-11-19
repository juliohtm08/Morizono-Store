import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';

// Componente principal da aplicação
function App() {
  return (
    <div>
      <Provider> {/* Provedor do contexto envolvendo os componentes da aplicação */}
        <Header /> {/* Componente de cabeçalho */}
        <Products /> {/* Componente que exibe a lista de produtos */}
        <Cart /> {/* Componente que representa o carrinho */}
      </Provider>
    </div>
  );
}

export default App;
