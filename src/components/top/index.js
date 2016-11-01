import React from 'react';

export default ({r, action, timesCalled}) => {
	//you could do actions in here if you were using react, with redux, they get broken out to somewhere else
	// function reloadButton(){
	// 	location.reload();
	// };

    return (
    	<div className = "component">
	        <h1>A Presentational Component</h1>
	        <h2>Synchronous Part: </h2>
	          <h3>{`${r}`}</h3>
	          <button onClick={action}>Click me</button>
	          <p>number of times called: {`${timesCalled}`}</p>
	          
        </div>
    );
}
