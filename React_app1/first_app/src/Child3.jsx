import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'
import Child4 from './Child4'
const Child3 = () => {
   const user=useContext(UserContext)
   console.log(user)
  return (
    <div>
      <h3>This is Children3 who needs the data of User{user.name}{user.role}</h3>
      <Child4/>
    </div>
  )
}

export default Child3
