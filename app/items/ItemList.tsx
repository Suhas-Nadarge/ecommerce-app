'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { RootState } from '../redux/store';
import { CartItem } from '../type';


const ItemList: React.FC = () => {
  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 40 },
    { id: 4, name: 'Item 4', price: 30 },
    { id: 5, name: 'Item 5', price: 50 },
    { id: 6, name: 'Item 6', price: 60 },
    // Add more items as needed
  ];

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const isItemInCart = (itemId: number) => {
    return cartItems.some((item: CartItem) => item.id === itemId);
  };

  return (
    <ul className="item-list">
      {items.map(item => {
        const isItemAdded = isItemInCart(item.id);
        return (
          <li
            key={item.id}
            className={`item-card ${isItemAdded ? 'added' : ''}`}
          >
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => dispatch(addToCart(item))}
              disabled={isItemAdded}
            >
              {isItemAdded ? 'Added' : 'Add to Cart'}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;