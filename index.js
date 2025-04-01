import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import LandingPage from './components/LandingPage';
 
ReactDOM.render(
  <Provider store={store}>
    <LandingPage />
  </Provider>,
  document.getElementById('root')
);