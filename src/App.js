import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      numbers: [0,1,2,3,4,5,6,7,8,9],
      operators: ['+', '-', '*', '/', '='],
      operator: '',
      leftOperandus: 0,
      rightOperandus: 0,
      result: 0
    }

    this.renderElements = this.renderElements.bind(this)
    this.operate = this.operate.bind(this)
  }

  renderElements(arr=[], elemClass='defaultClass') {
    return arr.map((el, i) => {
      return (
        <li 
          key={elemClass + i} 
          className={elemClass}
          onClick={}
        >
          {el}
        </li>
      )
    })
  }
  
  operate(num1, num2, operator) {
    let tmp;

    switch(operator) {
      case '+':
        tmp = num1 + num2
        break
      case '-':
        tmp = num1 - num2
        break
      case '*':
        tmp = num1 * num2
        break
      case '/':
        tmp = num1 / num2
        break
      default:
        tmp = 0
    }

    this.setState({...this.state, result: tmp})
  }

  render() {
    return (
      <div className="App">
        <h2>Calculator</h2>
        <div className="calc">
        <div className="calcDisplay">{this.state.result}</div>
          <ul className="calcNumbersWrapper">{this.renderElements(this.state.numbers, 'calcNumber')}</ul>
          <ul className="calcOperatorsWrapper">{this.renderElements(this.state.operators, 'calcOperator')}</ul>
        </div>
      </div>
    );
  }
}

export default App;
