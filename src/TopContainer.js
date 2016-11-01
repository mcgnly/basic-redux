import React, {Component} from 'react';
import Top from './components/top';
import {connect} from 'react-redux';
import {randomNumberAction} from './actions/topActions.js'

class TopContainer extends Component{//Component is coming from React
	
	render(){//render is coming from component
		//Note: if your action isn't working, it's probably because you are trying to run it directly out of the import, 
			//without remembering to bring it in from the props. It won't dispatch properly to the reducer if you forget. 
		const {number, timesCalled, randomNumberAction} = this.props;

		//Note: components HAVE to have capitalized names or else they won't work.
		return(
				<div className = "container">
					<h2>Another container, which holds: </h2>
					<Top r={number} action={randomNumberAction} timesCalled={timesCalled}/>
				</div>
			);
	}
}

function mapStateToProps(state){//gets invoked in the connect function below
	console.log (state);
	return{
		//state.values go here
        number : state.topReducer.number,
        timesCalled : state.topReducer.timesCalled
	}
}

//connect is the magic redux function that connects the state and the actions to the props that can be used by the app
export default connect(mapStateToProps,{
	//actions go here so you can dispatch them properly
	randomNumberAction
})(TopContainer);