import fetch from 'isomorphic-fetch';

export function randomNumberAction(){//you have to export the actions you would like to call from elsewhere
	console.log("calling an action!");
	const randomNumber=Math.floor(Math.random()*10);
	return {
		type:'RANDOM_NUMBER', //normal actions output an object, which has to have a "type" property
		number:randomNumber//they can also contain whatever data you would like to pass around
	}
};


export function fetchHeadline(){
	
	return function (dispatch) {//thunks output functions, rather than objects
		dispatch(waitingForHeadline())//dispatch manually invokes the action to be connected to the reducers, otherwise this is taken care of by the connect fn in the containers
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
		type:"RECIEVED_HEADLINE",//this would stop the spinner and provide the info for populating the area in the component
		headline
	}
}

function waitingForHeadline(){
	return{
		type:"WAITING_FOR_HEADLINE"//this could start a spinner while the response is being waited for
	}
}