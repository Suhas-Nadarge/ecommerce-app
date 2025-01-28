'use client';

import React from 'react';
import CartItems from './CartItems';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function Cart() {
  return (
    <Provider store={store}>

    <div className="container">
      <h1>Your Cart</h1>

      <CartItems />
    </div>
    </Provider>
  );
}
