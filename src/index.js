import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store.js';
import {Provider} from 'react-redux';

//this is the top-most level of the app. 
//Provider hooks access to the store, and therefor state, up to each of the child components 
	//in this case the App container, which holds all the other containers and therefor components
ReactDOM.render(
	<Provider store={store}>
  		<App />
	</Provider>,
  document.getElementById('root')
);
