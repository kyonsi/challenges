import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootState, reducers } from './reducers';
import { App } from './App';

const store = createStore<RootState, any, any, any>(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
