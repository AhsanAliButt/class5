import React, { useContext } from 'react';
import countercontext from './CounterContext';

const Child = (props) =>{
let counterValue = useContext(countercontext)
console.log(counterValue)
return(
<div>
<h1>Hi i am First Child</h1>
<h2>Hi my name is {props.name}</h2>
</div>
)
}
export default Child;