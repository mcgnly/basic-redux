import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopContainer from './TopContainer';
import RedditContainer from './RedditContainer';


class App extends Component {

  render() {
    //Note: in JSX you have to call classes className, because of reasons. onclick is also onClick, also because of reasons.

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This is the biggest container</h2>
        </div>
        <p className="App-intro">
          It lives in <code>src/App.js</code> and comes from the create-react-app original generated files.
        </p>
        <p>Inside the main container, are: </p>
       <TopContainer />
       <RedditContainer />
      </div>
    );
  }
}

export default (App);

