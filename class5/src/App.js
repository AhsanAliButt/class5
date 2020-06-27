import React from 'react';
import './App.css';
import Parent from'./Parent';
import CounterContext from './CounterContext';

function App() {
  return (
    <CounterContext.Provider value={10}>
      <div>
      <h1>Hellow World</h1>
      <Parent name="Ahsan"/>
      </div>
    </CounterContext.Provider>
  
  );
}

export default App;
