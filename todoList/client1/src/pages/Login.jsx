import { useState } from "react";
import API from '../api/api';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();
    const login=async(e)=>{
        e.preventDefault();
        const res=await API.post("/auth/login",{
            email,password
        });
        localStorage.setItem("token",res.data,token);
        navigate("/todos")
    };
  return (
    <div>
      <form onSubmit={login}>
        <input type="email" name="email" 
        placeholder='Enter Your Email:'
        onChange={(e)=>{
            setEmail(e.target.value)
        }} /><br/><br/>
       
        <input type="password" name="password" 
        placeholder='Enter Your Password:'
        onChange={(e)=>{
            setPassword(e.target.value)
        }} /><br/><br/>

        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
