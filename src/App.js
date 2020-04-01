import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      numbers: [0,1,2,3,4,5,6,7,8,9],
      operators: ['+', '-', '*', '/', '='],
      operator: '',
      leftOperandus: null,
      rightOperandus: null,
      result: 0,
      leftValue: true,
    }

    this.renderElements = this.renderElements.bind(this)
    this.operate = this.operate.bind(this)
    // this.setElementsToOperate = this.setElementsToOperate.bind(this)
  }

  renderElements(arr=[], elemClass='defaultClass') {
    let setElementsToOperate = () => {
      
      console.log('I am called')
      console.log(this.el)
      switch(this.elemClass) {
        case 'calcNumber':
          if(this.state.leftValue) {
            this.setState({...this.state, leftOperandus: parseInt(this.el)})
            this.setState({...this.state, leftValue: false})
          } else {
            this.setState({...this.state, rightOperandus: parseInt(this.el)})
          }
          break
        case 'calcOperator':
          this.setState({...this.state, operator: this.el})
          break
        default:
          console.log('Fail')
          return null
      }
      console.table(this.state)
    }

    return arr.map((el, i) => {

      this.el = el
      this.elemClass = elemClass
      this.i = i

      return (
        <li 
          key={elemClass + i} 
          className={elemClass}
          onClick={setElementsToOperate}
        >
          {el}
        </li>
      )
    })
  }

  operate(num1, num2, operator) {
    let tmp = 0;
    if(!!num1 && !!num2) {
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
