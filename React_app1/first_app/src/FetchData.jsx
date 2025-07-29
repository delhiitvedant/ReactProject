import React, { useEffect } from 'react'
import { useState } from 'react'

const FetchData = () => {
    const[Users,setUsers]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
            return response.json();
        }).then((data)=>{
          return  setUsers(data)
        })


    },[])  
  return (
    <>
    <h2>USer List</h2>
    {Users.map(user=>(
        <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">User List</h5>
    <p className="card-text">User ID:{user.id}
        User Name:{user.name}
    </p>
    <a href="#" className="btn btn-primary">Next Page</a>
  </div>
</div>
    ))}
    </>
  )
}

export default FetchData
