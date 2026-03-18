
import { useState,useEffect } from 'react';
import API from '../api/api';
function Profile() {
    const [user,setUser]=useState({});
    useEffect(()=>{
        const fetchProfile=async()=>{
            const res=await API.get("/auth/profile");
            setUser(res.data);
        };
        fetchProfile();
    },[])
  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile
