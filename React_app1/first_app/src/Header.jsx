import { useState } from "react";

function Header()
{
    let[count,setCount]=useState(5)
    
    
const increment=()=>{
    setCount(count=count+1)
}
    return (
        <>
 <h1>Hi, I am the functional component</h1>
 <h3>I am very east to learn {count}</h3>
 <button onClick={increment}>Increment</button>
 </>
    )
}

export default Header;