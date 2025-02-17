"use client"; 

import React from "react";
import Link from "next/link";
import { useAppSelector } from "../app/store/hooks";
import { ShoppingCart } from "lucide-react"; // Using Lucide for the cart icon



const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItemCount = cartItems.length; 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/items" className="nav-link">
          <h3>Item List</h3>
        </Link>
        <Link href="/cart" className="nav-link cart-link">
          <ShoppingCart size={24} />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
