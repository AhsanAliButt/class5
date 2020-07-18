import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer';

const ChildReducer=()=>{
    let [state,dispatch] =useReducer(CounterReducer,0)
    console.log(state)
    return(
        <div>
            <h6> This is Child using Counter rEDUCER</h6>
            <h3>Value of the reducer state is:{state} </h3>
    <button onClick={()=>dispatch('INCREMENT')}>increment reducer</button>
        </div>
    )
}
export default ChildReducer;