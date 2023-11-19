import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartXFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

import './CartItem.css';

function CartItem({ data }) {
  const { cartItems, setCartItems} = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
  
    if (itemIndex !== -1) {
      const updatedItems = [
        ...cartItems.slice(0, itemIndex),
        ...cartItems.slice(itemIndex + 1),
      ];
      setCartItems(updatedItems);
      console.log(updatedItems);
    }
  };
  
  return ( 
    <section className="cart-item">
      <img src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button 
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsFillCartXFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object.isRequired,
};
