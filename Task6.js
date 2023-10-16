import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: '',
      operation: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  performOperation = (operation) => {
    const { num1, num2 } = this.state;

    switch (operation) {
      case 'add':
        this.setState({ result: parseFloat(num1) + parseFloat(num2), operation: 'add' });
        break;
      case 'subtract':
        this.setState({ result: parseFloat(num1) - parseFloat(num2), operation: 'subtract' });
        break;
      case 'multiply':
        this.setState({ result: parseFloat(num1) * parseFloat(num2), operation: 'multiply' });
        break;
      case 'divide':
        this.setState({ result: parseFloat(num1) / parseFloat(num2), operation: 'divide' });
        break;
      default:
        break;
    }
  };

  render() {
    const { num1, num2, result, operation } = this.state;

    return (
      <div>
        <h2>Basic Calculator</h2>
        <input
          type="number"
          name="num1"
          placeholder="Enter number 1"
          value={num1}
          onChange={this.handleInputChange}
        />
        <input
          type="number"
          name="num2"
          placeholder="Enter number 2"
          value={num2}
          onChange={this.handleInputChange}
        />
        <div>
          <button onClick={() => this.performOperation('add')}>Add</button>
          <button onClick={() => this.performOperation('subtract')}>Subtract</button>
          <button onClick={() => this.performOperation('multiply')}>Multiply</button>
          <button onClick={() => this.performOperation('divide')}>Divide</button>
        </div>
        {operation && <p>Result of {operation}: {result}</p>}
      </div>
    );
  }
}

export default Calculator;
