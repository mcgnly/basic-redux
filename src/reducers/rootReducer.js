import topReducer from './topReducer';
import redditReducer from './redditReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	topReducer, 
	redditReducer
});


// export default function (state = {}, action) {
//   return {
//     number: topReducer(state, action),
//     timesCalled: topReducer(state, action),
//     redditTopHeadline: redditReducer(state, action)
//   }
// }


