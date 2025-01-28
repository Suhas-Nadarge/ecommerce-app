import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

export default function Cart() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([
    const cartItems =[
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 }]
//   ]);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const removeFromCart = (id: number) => {
    // setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                </div>
                <button
                  className="remove-from-cart-button"
                //   onClick={() => removeFromCart(item.id)}
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
      )}
    </div>
  );
}
