import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('0');

  const handleClick = (value) => {
    setResult((prevResult) => {
      
      if (value === 'AC') return '0';

      if (prevResult === '0') {
        return value;
      } else {
        return prevResult + value;
      }
    });
  };

  const calculateResult = () => {
    try {
      setResult((prevResult) => eval(prevResult).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => calculateResult()}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('AC')}>AC</button>
      </div>
    </div>
  );
}

export default App;
