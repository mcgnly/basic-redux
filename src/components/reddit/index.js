import React from 'react';

export default ({redditTopHeadline, fetchHeadline})=>{
	return (
		<div>
			<p>reddit top headline: {`${redditTopHeadline}`}</p>
			<button onClick={fetchHeadline}>get headline</button>

		</div>
		);
}