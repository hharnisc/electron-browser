import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import reducers from './reducers';
import windowMiddleware from './middleware/windowMiddleware';
import App from './components/App';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(windowMiddleware),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
