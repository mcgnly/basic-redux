import React, {Component} from 'react';
import {connect} from 'react-redux';
import Reddit from './components/reddit';
import {fetchHeadline} from './actions/topActions';

class RedditContainer extends Component{
	onComponentMount(){
	}

	render(){
		const {redditTopHeadline, fetchHeadline} = this.props;

		return(
			<div className = "container">
				<h2>Another container, which holds: </h2>
				<Reddit redditTopHeadline={redditTopHeadline} fetchHeadline={fetchHeadline}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		//state.values go here
		redditTopHeadline: state.redditReducer.redditTopHeadline
	}
}

export default connect(mapStateToProps,{
	//actions go here
	fetchHeadline
})(RedditContainer);