import React, {Component} from 'react';
import Top from './components/top';
import {connect} from 'react-redux';
import {randomNumberAction} from './actions/topActions.js'

class TopContainer extends Component{
	
	render(){
		const {number, timesCalled, randomNumberAction} = this.props;
		return(
			<Top r={number} action={randomNumberAction} timesCalled={timesCalled}/>
			);
	}
}

function mapStateToProps(state){
	return{
		//state.values go here
        number : state.number,
        timesCalled : state.timesCalled
	}
}
export default connect(mapStateToProps,{
	//actions go here
	randomNumberAction
})(TopContainer);