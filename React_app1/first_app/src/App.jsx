import './App.css';
import UserContext from './UserContext';
import Parent from './Parent'
import { useState } from 'react';
import ExpensiveCalculation from './ExpensiveCalculation';



function App() {
  const[count,setCount]=useState(0)
   const[num,setNum]=useState(1)
  const user={name:"Nidhi",role:"Center Academic Head"}
  return (
    <>

    <button onClick={()=>setCount(count+1)}>Increase Count_{count} </button>
     <button onClick={()=>setNum(num+1)}>Increase Number{num}</button>
     <ExpensiveCalculation num={num}/>
    {/* <UserContext.Provider value={user}>
   <Parent/>
    </UserContext.Provider> */}
      {/* <nav style={{ margin: 10 }}>
        <Link to="/home" style={{ marginRight: 10 }}>Home</Link>|
        <Link to="/about" style={{ marginRight: 10 }}>About</Link>|
        <Link to="/contact" style={{ marginRight: 10 }}>Contact</Link>|
        <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
      </nav>

      <Outlet /> This is where child components will be rendered */}
     
    </>
  );
}

export default App;
