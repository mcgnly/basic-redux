
const initialState = {
	number:0,
	timesCalled:0
	
}

// Note: reducers are functions, which take in state and an action, and output a copy of the state. 
	//you should use the spread operator or object.assign to avoid mutating state, because then you can't go back in time anymore. 
function topReducer(state=initialState, action){//the initial state gets populated by the object above^^, it can also be empty, but not undefined. 
	switch (action.type){//every action gets shouted at each reducer, so you have to filter out the noise and catch only the actions you care about
		case 'RANDOM_NUMBER':
			console.log("inside a reducer!");
			let newTimesCalled = state.timesCalled+1;
			return {...state, number:action.number, timesCalled:newTimesCalled};

		default:
			return state;//if the reducer isn't affected by the current action, it can just return the state, unchanged
	}

}

export default topReducer;