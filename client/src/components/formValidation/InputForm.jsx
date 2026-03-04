import React from 'react'

import { useState } from 'react'
function InputForm() {
 const[form,setForm]=useState({
    email:"",
    password:""
 });
 const handleChange=(e)=>{
    setForm({
        ...form,[e.target.name]:e.target.value
    });
 };
//  const[errors,setErrors]=useState({})
const handleSubmit=(e)=>{
    e.preventDefault();
    // const validateError=validate();
    // setErrors(validateError)
    /*
        checks user input 
        default method 

    */

}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Enter Your Email' 
        required id="email"
        value={form.email}
        name="email"
        onChange={handleChange}
        /><br/>

        <input type="password" 
        placeholder='Enter Your Password'
        required id="password"
        value={form.password}
        name="password"
        onChange={handleChange}
        /><br/>
        {/* <p>{error}</p> */}
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default InputForm
