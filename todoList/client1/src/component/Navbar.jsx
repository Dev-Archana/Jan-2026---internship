import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Navbar() {
    const mystyle={
      
    }
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        navigate("/")
    }
  return (
    <div style={mystyle}>
<Link to="/signup">Signup</Link>
<Link to="/login">Login</Link>
<Link to="/todos">Todos</Link>
<Link to="/profile">Profile</Link>
<button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar
