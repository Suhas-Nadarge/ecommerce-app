'use client';

import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  price: string;
}

interface ItemListProps {
  items: Item[];
}

export function ItemList({ items }: ItemListProps) {
  const [cart, setCart] = useState<string[]>([]);
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set()); // Track added item IDs

  // Handle add to cart functionality
  const addToCart = (id: number, name: string) => {
    console.log('Added to cart: ' + name);
    setCart((prevCart) => [...prevCart, name]);
    setAddedItems((prevAddedItems) => new Set(prevAddedItems).add(id)); // Mark item as added
  };

  return (
    <div>
      <ul className="item-list">
        {items.map((item) => {
          const isItemAdded = addedItems.has(item.id); // Check if item is added to the cart
          return (
            <li
              key={item.id}
              className={`item-card ${isItemAdded ? 'added' : ''}`} // Add 'added' class if item is added
            >
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(item.id, item.name)}
                disabled={isItemAdded} // Disable button if item is already added
              >
                {isItemAdded ? 'Added' : 'Add to Cart'}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="cart">
        <h3>Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
