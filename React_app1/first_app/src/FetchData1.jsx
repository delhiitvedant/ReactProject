import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const FetchData1 = () => {
    const[Post,setPost]=useState([])
    const[page,setPage]=useState(1);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            return response.json()
        }).then((data)=>{
            // shows only 5 products per page
            const start=(page-1)*5;
            const end=start+5;
            setPost(data.slice(start,end));
            console.log("component rerendered")
        })

    },[page])
  return (
    <div>
      <h2>Product List Page {page}</h2>
      <ul>
    {/* {post.map(p=>(
        <li key={p.id}>{p.userId}{p.title}{p.body}</li>
    ))} */}

    {Post.map((p)=>(
         <li key={p.id}>{p.userId}{p.title}{p.body}</li>
    ))}

      </ul>
      {/* create buttons for loadingrecords */}
      <button onClick={()=>setPage(page-1)}>Prev</button>
      <button onClick={()=>setPage(page+1)}>Next</button>

    </div>
  )
}

export default FetchData1
