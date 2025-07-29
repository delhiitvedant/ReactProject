import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const[formData,setFormData]=useState({
        ename:'',
        email:'',
        age:'',
    })
    const handleChange=(e)=>{
        
        const {name,value}= e.target;
        setFormData(prevstate=>({
            ...prevstate, //rest
            [name]:value
        }));

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted Data:",formData);
        alert(`Employee Data: ${formData.ename}${formData.email}${formData.age}`)
      


    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <label>Name:</label>
  <input type="text" name="ename" value={formData.ename} onChange={handleChange} required />
   <br /><br />
  <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
     <br/>  
 <label>Age:</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <br></br>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
