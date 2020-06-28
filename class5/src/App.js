import React,{useState} from 'react';
import './App.css';
import Parent from'./Parent';
import CounterContext from './CounterContext';

function App() {
  //let [count, Setcount]=useState(30)
  let countState=useState(25)
  return (
    <CounterContext.Provider value={countState}>
      <div>
      <h1>Hellow World</h1>
      <Parent name="Ahsan"/>
        <h3>PIAIC TEACHERS ARE BEST</h3>
      </div>
    </CounterContext.Provider>
  
  );
}

export default App;
