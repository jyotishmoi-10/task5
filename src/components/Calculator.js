// src/components/Calculator.js

import React, { useState, useEffect } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Note: eval is not safe for production use
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '√') {
      setInput(Math.sqrt(eval(input)).toString());
    } else if (value === 'x²') {
      setInput((eval(input) ** 2).toString());
    } else if (value === '1/x') {
      setInput((1 / eval(input)).toString());
    } else {
      // Prevent multiple consecutive operators
      if (/[\+\-\*\/]$/.test(input) && /[\+\-\*\/]/.test(value)) {
        return;
      }
      setInput(input + value);
    }
  };

  const handleKeyPress = (event) => {
    const { key } = event;
    if (/[0-9+\-*/=]/.test(key)) {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      handleButtonClick('=');
    } else if (key === 'Backspace') {
      setInput(input.slice(0, -1));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6','√', '1', '2', '3','*', 'x²', '-', '1/x', '0', '.', 'C', '+', '='].map((btn) => (
          <Button key={btn} value={btn} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
