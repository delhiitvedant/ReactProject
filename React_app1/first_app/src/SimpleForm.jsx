import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SimpleForm = () => {
    const[fname,setName]=useState('')
    const[lname,setLname]=useState('')
    const[email,setEmail]=useState('')
      const navigate = useNavigate(); 

    const handleSubmit=(e)=>{
        e.preventDefault();
        // alert(`Name:${fname}`)
        navigate("/")

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter yourname' value={fname} onChange={(e)=>setName(e.target.value)}/>
        <button value="submit">Submit</button>
      </form>
    </div>
  )
}

export default SimpleForm
