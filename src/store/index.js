import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import game from './game';

const reducer = combineReducers({ game });

const middleware = composeWithDevTools(
  applyMiddleware(createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from './game';
