import React from 'react'





const Userlist = ({onGreet}) => {


  return (
    <>
    <h1>tHIS IS A PROPS</h1>
    <button onClick={()=>{onGreet('Nidhi')}}>Click here</button>
    </>
  )
   

}

export default Userlist
