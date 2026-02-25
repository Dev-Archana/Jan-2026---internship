import React, { useEffect, useState } from 'react'

function CounterApp() {
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    }
    // useEffect(()=>{
    //    const timer=setInterval(()=>{
    //     console.log("Executing File After 1 sec")
    //    },2000); 
    // })
  return (
    <div>
      <h1>{count}</h1> 
      {/* this is used to display the values : */}

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounterApp 
// rfce => react functional component with export 
