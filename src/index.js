import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Home from './Home';
import Store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={Store}>
      <Home />
    </Provider>
  </>
);
