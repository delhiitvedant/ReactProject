import React from 'react'
import { useState } from 'react';

const CounterApp = () => {
   let [counter,setCounter]=useState(1);

   const increase=()=>{
    setCounter(counter=counter+1)
   }
    const decrease=()=>{
        if(counter>0)
        {
    setCounter(counter=counter-1)
        }
        else{
            setCounter("Negative values are not allowed")
        }
   }

return(
    <>
{counter}
<button onClick={increase}>Increment</button>
<button onClick={decrease}>Decrement</button>
</>
)

 
}

export default CounterApp
