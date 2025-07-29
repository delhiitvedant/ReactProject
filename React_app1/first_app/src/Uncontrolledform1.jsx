import React from 'react'
import { useRef } from 'react'

const Uncontrolledform1 = () => {
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const ageRef=useRef(null)

    const handleSubmit=(e)=>{

        e.preventDefault();
        //access values one by one from input fields
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const age=ageRef.current.value;
        console.log("Name is",name);
        console.log("Email is",email);
        console.log("Age is",age);

    }
  return (
    <div>
        <h1>UnControlled Form using UseRef</h1>
        <form onSubmit={handleSubmit}>
    <label>Name:</label>
 <input type="text" ref={nameRef} />
 <br/>  
  <label>Email:</label>
 <input type="email" ref={emailRef} />
 <br/>  
   <label>Age:</label>
 <input type="number" ref={ageRef} />
 <br/>  
 <button>Submit</button>
        </form>
      
    </div>
  )
}

export default Uncontrolledform1
