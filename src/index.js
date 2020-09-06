import { createRenderer } from 'fela'
import extend from 'fela-plugin-extend'
import { Provider } from 'react-fela'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderer = createRenderer({
  plugins: [ extend() ]
})

ReactDOM.render(
  <Provider renderer={renderer}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
