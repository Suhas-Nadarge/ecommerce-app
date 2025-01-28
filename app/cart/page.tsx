import React from 'react';
import CartItems from './CartItems';

export default function Cart() {
  return (
    <div className="container">
      <h1>Your Cart</h1>
      <CartItems />
    </div>
  );
}
