
const initialState = {
	number:0,
	timesCalled:0,
	redditTopHeadline:'No Headline'
}

const topReducer = (state=initialState, action)=>{
	switch (action.type){
		case 'RANDOM_NUMBER':
			console.log("inside a reducer!");
			let newTimesCalled = state.timesCalled+1;
			return {...state, number:action.number, timesCalled:newTimesCalled};
		case 'RECIEVED_HEADLINE':
			return {...state, redditTopHeadline:action.headline}
		default:
			return state;
	}

}

export default topReducer;