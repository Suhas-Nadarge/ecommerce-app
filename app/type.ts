export interface CartItem {
    id: number;
    name: string;
    price: number;
    image:string;
  }
  
  export interface CartState {
    items: CartItem[];
    totalPrice: number;
  }