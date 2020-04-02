import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      numbers: [0,1,2,3,4,5,6,7,8,9],
      operators: ['+', '-', '*', '/', '='],
      operator: '',
      operandusDigits: [],
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
    let setElementsToOperate = (e) => {

      let elem = e.target.innerHTML

      if((/\d+/g).test(elem)) {

        this.state.operandusDigits.push(elem)
        console.log(this.state.operandusDigits)

      } else if((/[\+\-\*\/]/g).test(elem)) {

        // this.setState({...this.state, leftOperandus: 1/*this.state.operandusDigits.join('')*/})
        this.setState({...this.state, ...{operator: elem, operandusDigits: [], leftOperandus: this.state.operandusDigits.join('')}})

        console.log('joined digits' + this.state.operandusDigits.join(''))
        console.log('leftoperandus ' + this.state.leftOperandus)
      } else if(elem === '=') {

        this.setState({...this.state, ...{rightOperandus: this.state.operandusDigits.join('')}})

        let num1 = parseInt(this.state.leftOperandus)
        let num2 = parseInt(this.state.operandusDigits.join(''))
        let operator = this.state.operator

        this.operate(num1, num2, operator)

        console.table(this.state)
      }
      
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
    console.log('operate is called')
    let tmp = 0;
    console.table({
        num1: num1,
        num2: num2,
        op: operator
      })
    if(!!num1 && !!num2) {
      switch(operator) {
        case '+':
          tmp = num1 + num2
          console.table({
            num1: num1,
            num2: num2,
            op: operator
          })
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
