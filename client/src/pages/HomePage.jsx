import React from 'react'
import {products} from "../data/products"
function HomePage({userData}) {
  const{name,age}=userData;//destructing 
  return (
    <div>
    <h1>Hello {name}</h1>
    <h1>Hello {age}</h1>
    </div>
  )
}

export default HomePage
