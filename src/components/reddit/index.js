import React from 'react';

export default ({redditTopHeadline, fetchHeadline})=>{
	return (
		<div className = "component">
			<h1>A Presentational Component</h1>
	        <h2>Asynchronous Part: </h2>
			<p>reddit top headline: {`${redditTopHeadline}`}</p>
			<button onClick={fetchHeadline}>get headline</button>
		</div>
		);
}