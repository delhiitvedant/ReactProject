import React from 'react'

const SideEffectClean = () => {
    const timer=setInterval(()=>{
console.log("Running every 1 second");
    },5000)
  return (
    <div>
    clearInterval(timer); //clean up code
    console.log("timer clean up")
    </div>
  )
}

export default SideEffectClean
