import { useState } from "react";
import API from '../api/api';
import {useNavigate} from 'react-router-dom';
function Signup() {
    const [form , setForm]=useState({
        name:"",
        email:"",
        password:""
    });
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        });
    };
    const submit=async(e)=>{
        e.preventDefault();
        await API.post('/auth/signup',form);
        alert('signup successful');
        navigate('/')
    };
  return (
    <div>
      <form onSubmit={submit}>

        <input type="text" name="name" 
        placeholder='Enter Your Name:'
        onChange={handleChange} /><br/><br/>
        
        <input type="email" name="email" 
        placeholder='Enter Your Email:'
        onChange={handleChange} /><br/><br/>
       
        <input type="password" name="password" 
        placeholder='Enter Your Password:'
        onChange={handleChange} /><br/><br/>

        <button>Signup</button>

      </form>
    </div>
  )
}

export default Signup
