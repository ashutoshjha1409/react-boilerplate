import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './stores/blitzStore';
import * as  Actions from './common/action';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      SBMessage: 'Hello world'
    }
    this._onStoreChange = this._onStoreChange.bind(this);    
  }
  componentWillMount(){
    this._makeSampleApiCall();
    Store.on('change', this._onStoreChange);
  }

  componentWillUnmount(){
    Store.removeListener('change', this._onStoreChange);
  }

  _onStoreChange(type){
    if(type == 'SAMPLE_DATA'){
      console.log("in here?",  Store._fetchFromStore(type));
      this.setState({'SBMessage': Store._fetchFromStore(type)})
    }   
  }
  _makeSampleApiCall(){
    console.log("componentWillMount");
    Actions.getSampleData({}, true);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to</h1>
        </header>
        <div>{this.state.SBMessage}</div>
      </div>
    );
  }
}

export default App;
