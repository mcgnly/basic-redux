
const initialState = {
	number:0,
	timesCalled:0
	
}

function topReducer(state=initialState, action){
	switch (action.type){
		case 'RANDOM_NUMBER':
			console.log("inside a reducer!");
			let newTimesCalled = state.timesCalled+1;
			return {...state, number:action.number, timesCalled:newTimesCalled};

		default:
			return state;
	}

}

export default topReducer;