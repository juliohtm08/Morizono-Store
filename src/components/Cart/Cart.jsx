import React, { useContext } from 'react';

import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

import './Cart.css';

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return ( 
    <section className={`cart ${isCartVisible ? 'cart--active' : '' }`}>
      <div className="cart-items">
        {cartItems.map((cartItem, index) => (
          <CartItem key={index} data={cartItem} />
        ))}
      </div>

      <div className="cart-resume">Total: {formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
