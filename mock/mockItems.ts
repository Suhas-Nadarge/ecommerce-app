import { CartItem } from "../app/type";

export const mockItems: CartItem[] = [
  { id: 1, name: 'Item 1', price: 10, image: '/items/item1.jpg' },
  { id: 2, name: 'Item 2', price: 20, image: '/items/item2.jpg' },
  { id: 3, name: 'Item 3', price: 40, image: '/items/item3.jpg' },
  { id: 4, name: 'Item 4', price: 30, image: '/items/item4.jpg' },
  { id: 5, name: 'Item 5', price: 50, image: '/items/item5.jpg' },
  { id: 6, name: 'Item 6', price: 60, image: '/items/item6.jpg' },
];

export const fetchItems = (): Promise<CartItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockItems);
    }, 200); // just giving delay of 0.2 second
  });
};
