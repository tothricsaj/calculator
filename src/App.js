import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      numbers: [0,1,2,3,4,5,6,7,8,9],
    }

    this.renderElements = this.renderElements.bind(this)
  }

  renderElements(arr=[], elemClass='defaultClass') {
    return arr.map((el, i) => {
      return (
        <li key={i} className={elemClass}>
          {el}
        </li>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Calculator</h2>
        <div className="calc">
          <div className="calcDisplay"></div>
          <ul>{this.renderElements(this.state.numbers, 'calcNumber')}</ul>
        </div>
      </div>
    );
  }
}

export default App;
