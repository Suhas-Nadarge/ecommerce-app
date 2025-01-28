import React from 'react';

interface Item {
  id: number;
  name: string;
  price: string;
}

async function fetchItems(): Promise<Item[]> {
  // Simulate fetching data from an API
  const items: Item[] = [
    { id: 1, name: "Item 1", price: "$10" },
    { id: 2, name: "Item 2", price: "$20" },
    { id: 3, name: "Item 3", price: "$30" },
    { id: 4, name: "Item 4", price: "$40" },
    { id: 5, name: "Item 5", price: "$50" },
  ];
  return items;
}

export default async function ItemList() {
  const items = await fetchItems(); // Fetch items server-side

  return (
    <div className="container">
      <h1>Item List</h1>
      <ul className="item-list">
        {items.map(item => (
          <li key={item.id} className="item-card">
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}