The solution featuring item listings, a shopping cart, and persistent cart storage using localStorage. Users can add items to the cart, view the cart, and see their total.

Technologies Used
Frontend: Next.js v15
State Management: Redux (using useAppSelector, useAppDispatch hooks)
Local Storage: Used for persisting the cart data

Features
Add items to the cart: Users can add items from the product list to the shopping cart.
Persistent cart: Cart items persist after a page refresh using localStorage.
Cart Management: Users can view the cart and check the items added.


Project Setup

npm install
npm run dev

This will start the development server and open the app in your default browser at http://localhost:3000.

How It Works
Item List: A list of items is displayed where each item has an image, name, price, and an "Add to Cart" button.
Cart Management: When an item is added to the cart, the addToCart action is dispatched to the Redux store. The cart is stored in localStorage to persist across page refreshes.
Redux Store: The app uses Redux to manage the cart state. It dispatches actions to add items and updates the localStorage when the cart changes.


Notes
Here When we are creating store instance at first time, we will check if item exists in cart from localstorage - if yes, then add it or leave it.

The addToCart action updates both the Redux store and the localStorage with the new cart state.

Things I tried before going to final solution,
1. Redux-Persist
I tried using redux-persist to persist cart data, but faced hydration issues with server-side rendering (SSR). The initial state wasn’t always synced between the server and client, causing inconsistencies. I ended up not using redux-persist and instead manually handled cart persistence with localStorage in useEffect.

2. Next-Redux-Wrapper
I explored next-redux-wrapper for integrating Redux with Next.js, but faced compatibility issues with the new app routing (Next.js 13+). The library was built for page routing and didn’t work well with the app directory. I switched to a manual Redux setup for better compatibility.

