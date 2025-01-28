// page.tsx (SSR Component)

import { ItemList } from './ItemList'; // Import the client-side component

// Simulate fetching data from an API
async function fetchItems() {
  const items = [
    { id: 1, name: "Item 1", price: "$10" },
    { id: 2, name: "Item 2", price: "$20" },
    { id: 3, name: "Item 3", price: "$30" },
    { id: 4, name: "Item 4", price: "$40" },
    { id: 5, name: "Item 5", price: "$50" },
  ];
  return items;
}

export default async function Page() {
  // Fetch items server-side
  const items = await fetchItems();

  return (
    <div className="container">
      <h1>SSR Page</h1>
      {/* Pass items as props to the client-side component */}
      <ItemList items={items} />
    </div>
  );
}
