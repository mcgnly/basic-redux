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
			<div>
				<Reddit redditTopHeadline={redditTopHeadline} fetchHeadline={fetchHeadline}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		//state.values go here
		redditTopHeadline: state.redditTopHeadline
	}
}

export default connect(mapStateToProps,{
	//actions go here
	fetchHeadline
})(RedditContainer);