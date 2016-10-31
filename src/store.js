import { createStore, applyMiddleware } from 'redux';
import topReducer from './reducers/topReducer.js';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

let store = createStore(topReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

export default store;