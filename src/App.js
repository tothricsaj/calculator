import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      numbers: [7,8,9,4,5,6,1,2,3,0],
      operators: ['+', '-', '*', '/', '='],
      operator: '',
      operandusDigits: [],
      leftOperandus: null,
      rightOperandus: null,
      result: 0,
      displayRes: '',
    }

    this.renderElements = this.renderElements.bind(this)
    this.operate = this.operate.bind(this)
    this.emptyOperandusStaff = this.emptyOperandusStaff.bind(this)
  }

  renderElements(arr=[], elemClass='defaultClass') {
    let setElementsToOperate = (e) => {

      let elem = e.target.innerHTML

      if((/\d+/g).test(elem)) {

        this.state.operandusDigits.push(elem)
        this.setState({...this.state, displayRes: this.state.displayRes + elem})

      } else if((/[\+\-\*\/]/g).test(elem)) {

        console.log('Now, operator')
        console.log( this.state.displayRes + elem)

        this.setState(Object.assign(
          this.state,
          {displayRes: this.state.displayRes + elem}
        ))

        console.log(this.state.displayRes)
        this.setState({...this.state, ...{operator: elem, operandusDigits: [], leftOperandus: this.state.operandusDigits.join('')}})

      } else if(elem === '=') {

        this.setState({...this.state, ...{rightOperandus: this.state.operandusDigits.join('')}})

        let num1 = parseInt(this.state.leftOperandus)
        let num2 = parseInt(this.state.operandusDigits.join(''))
        let operator = this.state.operator

        this.operate(num1, num2, operator)
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

  emptyOperandusStaff() {
    console.log('called')
    this.setState({
      ...this.state,
      ...{
        leftOperandus: null,
        rightOperandus: null,
        operandusDigits: [],
        operator: '',
        result: 0,
        displayRes: ''
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Calculator</h2>
        <div className="calc">
        <div className="calcDisplay">
          {
            (
              !!!this.state.result
              ? this.state.displayRes
              : this.state.result
            )
          }
          {
            this.state.result === 0 && this.state.displayRes === ''
            ? 0
            : null
          }
        </div>
          <div onClick={this.emptyOperandusStaff} className={"remover"}>C</div>
          <ul className="calcNumbersWrapper">{this.renderElements(this.state.numbers, 'calcNumber')}</ul>
          <ul className="calcOperatorsWrapper">{this.renderElements(this.state.operators, 'calcOperator')}</ul>
        </div>
      </div>
    );
  }
}

export default App;
