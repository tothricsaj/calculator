import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <h2>Calculator</h2>
        <div className="calc"></div>
      </div>
    );
  }
}

export default App;
