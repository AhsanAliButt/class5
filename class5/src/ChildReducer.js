import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer';

const ChildReducer=()=>{
    let [state,dispatch] =useReducer(CounterReducer,10)
    console.log(state)
    return(
        <div>
            <h1>Hi its Child Reducer </h1>
        </div>
    )
}
export default ChildReducer;