import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = (props) =>{
let counterValue = useContext(counterContext)
console.log(counterValue)
return(
<div>
<h1>Hi i am First Child</h1>
<h2>Hi my name is {props.name}</h2>
<h3>Counter Value is :{counterValue[0]}</h3>
<button onClick={()=> {counterValue[1](++counterValue[0])}}>increament</button>
</div>
)
}
export default Child;