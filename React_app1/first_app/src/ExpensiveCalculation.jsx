import React, { useMemo } from 'react'

const ExpensiveCalculation = ({num}) => {
    function slowFunction(n)
        {
            console.log("Running Slow")
            for(let i=0;i<=199;i++)
            {
                return n*2;
            }

        }
        const result=useMemo(()=>slowFunction(num),[num]);
    
  return (
    <div>
     <h3>Result of expensive calcuation is:{result}</h3> 
    </div>
  )
  
}

export default ExpensiveCalculation
