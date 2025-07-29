import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UncontrolledForm = () => {
    const myref=useRef(null)
    const[printName,setName]=useState('')
   
   const handleSubmit=(e)=>{
        e.preventDefault();
        const enteredname=myref.current.value;
        alert(`Entered Name is ${enteredname}`)
        myref.current.value='';
        useNavigate("/")

    }
    const print1=()=>{
        const enteredname=myref.current.value;
        alert(`Entered Name is ${enteredname}`)
        setName(enteredname)
        
    }   

  return (
    <div>
        
      <form onSubmit={handleSubmit}>
        
    <input type="text" defaultValue="nidhi" placeholder="Enter your name" ref={myref} />
<button onClick={print1}>Submit</button>
<h3>{printName}</h3>
      </form>

    </div>
  )
}

<form action="">
    <input type="text" name="t1" value=" " placeholder="Enter your name" />

</form>
export default UncontrolledForm
