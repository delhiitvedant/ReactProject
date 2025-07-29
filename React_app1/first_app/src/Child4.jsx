import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

const Child4 = () => {
    const user=useContext(UserContext)
  return (
    <div>
      <h4>{user.name}</h4>
       <h4>{user.role}</h4>
    </div>
  )
}

export default Child4
