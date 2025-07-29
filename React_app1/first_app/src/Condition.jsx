import React from 'react'

const Condition = ({num}) => {

 return (
<div>
{num%2===0 && <h1>Number is Even</h1>}
 </div>
 )
}

export default Condition;
