
'use client'
import React from 'react';
import { addToCart } from '../store/cartSlice';
import { RootState } from '../store/store';
import { CartItem } from '../type';
import { useAppDispatch, useAppSelector } from '../store/hooks';


const ItemList: React.FC = () => {
  const items = [
    { id: 1, name: 'Item 1', price: 10, image: "/items/item1.jpg" },
    { id: 2, name: 'Item 2', price: 20,image: "/items/item2.jpg" },
    { id: 3, name: 'Item 3', price: 40,image: "/items/item3.jpg" },
    { id: 4, name: 'Item 4', price: 30,image: "/items/item4.jpg" },
    { id: 5, name: 'Item 5', price: 50,image: "/items/item5.jpg" },
    { id: 6, name: 'Item 6', price: 60,image: "/items/item6.jpg" },
    // Add more items as needed
  ];

  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();

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