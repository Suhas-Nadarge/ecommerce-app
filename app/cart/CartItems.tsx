'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { RootState } from '../redux/store';
import { CartItem } from '../type';


const CartItems: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="cart-list">
        {cartItems.map((item: CartItem) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
            </div>
            <button
              className="remove-from-cart-button"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h2>Total: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default CartItems;