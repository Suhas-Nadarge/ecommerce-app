'use client';

import React from 'react';
import ItemList from './ItemList';
import store from '../redux/store';
import { Provider } from 'react-redux';

const Page: React.FC = () => {
  return (
    <Provider store={store}>
    <div>
      <h1>Shopping Cart</h1>
      <ItemList />
    </div>
    </Provider>

  );
};

export default Page;