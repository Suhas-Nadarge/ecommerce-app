import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ItemList from './items/ItemList';

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <ItemList />
      </div>
    </Provider>
  );
}