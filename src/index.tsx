import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';


// const shoppingListPopUp = ReactDOM.createRoot(
//   document.getElementById('shoppingListPopUp') as HTMLElement
// );


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);


