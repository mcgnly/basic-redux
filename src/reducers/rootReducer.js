import topReducer from './topReducer.js';
import redditReducer from './redditReducer.js';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
	topReducer, 
	redditReducer
})

export default rootReducer;