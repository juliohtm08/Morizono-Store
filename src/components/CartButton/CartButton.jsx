import React, { useContext } from 'react';
import { BsCart } from 'react-icons/bs';
import AppContext from '../../context/AppContext';


import './CartButton.css';

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return ( 
    <button 
      type="button" 
      className="cart__button"
      onClick={ () => setIsCartVisible(!isCartVisible) }
    >
      <BsCart />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
