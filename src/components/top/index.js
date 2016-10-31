import React from 'react';

export default ({r, action, timesCalled, redditTopHeadline}) => {

	// function reloadButton(){
	// 	location.reload();
	// };

    return (
    	<div className="topPage">
	        <h1>async magic</h1>
	          <p>:D</p>
	          <h3>{`${r}`}</h3>
	          <button onClick={action}>Click me</button>
	          <p>number of times called: {`${timesCalled}`}</p>
	          
        </div>
    );
}
