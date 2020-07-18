import React,{useState} from 'react';
import './App.css';
import Parent from'./Parent';
import CounterContext from './CounterContext';

function App() {
  //let [count, Setcount]=useState(30)
  let countState=useState(1)
  return (
    <CounterContext.Provider value={countState}>
      <div>
      <h5>Hellow World</h5>
      <Parent name="Ahsan"/>
        <h5>PIAIC TEACHERS ARE BEST</h5>
      </div>
    </CounterContext.Provider>
  
  );
}

export default App;
