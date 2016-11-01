import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

//createStore connects the reducers, which output state, to the actions which interact with them, 
	//and passes the state on to the Provider in the index.js
let store = createStore(rootReducer,
	applyMiddleware(
		thunkMiddleware,//thunk is what allows the actions to return functions instead of only objects, and handles async
		loggerMiddleware
	)
);

export default store;