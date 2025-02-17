'use client'
import React from 'react';
import { removeFromCart } from '../store/cartSlice';
import { RootState } from '../store/store';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const CartItems: React.FC = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const totalPrice = useAppSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useAppDispatch();

  return (
    <div>
      <ul className="cart-list">
        {cartItems.map((item: any) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
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
        <div className="no-item">
          {!cartItems.length && <p>No Items added to the cart!</p>}
        </div>
      </ul>
      <div className="cart-summary">
        <h2>Total: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default CartItems;
