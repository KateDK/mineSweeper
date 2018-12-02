import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './appReducer';

const reducer = combineReducers({ appReducer });

const middleware = composeWithDevTools(
  applyMiddleware(createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from './appReducer';
