// src/App.js

import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';
import './components/Calculator.css';
import './components/Button.css';
import './components/Display.css';
import './components/ThemeSwitcher.css'; // Import the new CSS

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('dark-mode');
    } else {
      setTheme('light');
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className="App">
      <div className="theme-switcher">
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
