export interface CartItem {
    id: number;
    name: string;
    price: number;
  }
  
  export interface CartState {
    items: CartItem[];
    totalPrice: number;
  }