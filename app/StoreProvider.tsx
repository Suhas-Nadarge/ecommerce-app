'use client'
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { addToCart } from './store/cartSlice';
import makeStore, { AppStore } from './store/store';
import { CartItem } from './type';


export default function StoreProvider({
  children
}: {
  readonly children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // Persist the cart after refresh
    const cartItems = JSON.parse(localStorage.getItem('cart') ?? '[]') as CartItem[];
    cartItems.forEach(item => {
      storeRef.current!.dispatch(addToCart(item));
    });
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}