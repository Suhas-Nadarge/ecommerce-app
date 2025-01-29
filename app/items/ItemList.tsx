'use client'
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { RootState } from '../store/store';
import { addToCart } from '../store/cartSlice';
import { CartItem } from '../type';
import { fetchItems } from '../../mock/mockItems';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadItems = async () => {
      try {
        const fetchedItems = await fetchItems();
        setItems(fetchedItems); // Update state with fetched items
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    loadItems(); // Call the async function to fetch items
  }, []);

  const isItemInCart = (itemId: number) => {
    return cartItems.some((item) => item.id === itemId);
  };

  if (loading) {
    return <p className='loading-message'>Loading items...</p>; // Show loading state while fetching
  }

  return (
    <ul className="item-list">
      {items.map(item => {
        const isItemAdded = isItemInCart(item.id);
        return (
          <li
            key={item.id}
            className={`item-card ${isItemAdded ? 'added' : ''}`}
          >
            <img src={item.image} alt={item.name} className="item-image" />
            <h2>{item.name}</h2>
            <p>Price: {item.price}$</p>
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
