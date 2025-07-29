import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const UseEffectHook = () => {
    const[counter,setCounter]=useState(0)
     const[data,setData]=useState(0)
     useEffect(()=>{
       callonce(); // to control the side effect
     },[])

function callonce()
{
    console.log("I am a Function and i will be called once");
}


  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
      <button onClick={()=>setData(data-1)}>Data{data}</button>
    </div>
  )
}

export default UseEffectHook
