import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

//createStore connects the reducers, which output state, to the actions which interact with them, 
	//and passes the state on to the Provider in the index.js
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
	composeEnhancers(
    applyMiddleware(
    	thunkMiddleware,//thunk is what allows the actions to return functions instead of only objects, and handles async
		loggerMiddleware
		)
    )
);

export default store;