import React, { useReducer } from 'react'
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'INCREMENT':
            return {count:state.count+1}

        case 'DECREMENT':
            return {count:state.count-1}
        default:
           return state;
    }
}

const UseReducerHook = () => {
    const[state,disptach]=useReducer(reducer,{count:0})
  return (
    <div>
      <h2>This is useReducer Hook to maintain multiple states based on inputs</h2>
      <h2>{state.count}</h2>
      <button onClick={()=>disptach({type:'INCREMENT'})}>INCREMENT</button>
      <button onClick={()=>disptach({type:'DECREMENT'})}>DECREMENT</button>
    </div>
  )
}

export default UseReducerHook
