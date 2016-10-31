import fetch from 'isomorphic-fetch';

export function randomNumberAction(){
	console.log("calling an action!");
	const randomNumber=Math.floor(Math.random()*10);
	return {
		type:'RANDOM_NUMBER',
		number:randomNumber
	}
};


export function fetchHeadline(){
	//thunks are functions, rather than objects
	return function (dispatch) {
		dispatch(waitingForHeadline())//start up the spinner
		return fetch(`http://www.reddit.com/r/aww.json`)
		.then((res)=>{
			if (res.status>=400){
				throw new Error("Bad response from server");
			}	
			return res.json();
		})
		.then((json) => {return(json.data.children[0].data.title);
		})
		.then((res)=>{dispatch(recievedHeadline(res));
		});
	}
}

function recievedHeadline(headline){
	return{
		type:"RECIEVED_HEADLINE",
		headline
	}
}

function waitingForHeadline(){
	return{
		type:"WAITING_FOR_HEADLINE"
	}
}