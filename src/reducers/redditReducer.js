const initialState = {
	redditTopHeadline:'No Headline'
}

function redditReducer(state=initialState, action){
	switch(action.type){
		case 'RECIEVED_HEADLINE':
			return {...state, redditTopHeadline:action.headline}
		default:
			return state;
	}
}

export default redditReducer;