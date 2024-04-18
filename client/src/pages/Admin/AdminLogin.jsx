import React, { useState } from 'react'
import {useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import {message} from "antd";
import axios from "axios";

export default function Login() {

  const dispatch = useDispatch();
  const login = async ()=>{
    try {
      dispatch(showLoading());
      const response = await axios.post('/api/portfolio/admin-login', user);
      dispatch(hideLoading());
      if(response.data.success){
        message.success(response.data.message);
        localStorage.setItem('token', JSON.stringify(response.data));
        // localStorage.setItem('token', response.data);
        window.location.href = '/admin';
      }
      else{
        message.error(response.data.message)
        dispatch(hideLoading());
      }

    } catch (error) {
      message.error(error.message)
    }
  }

  const [user, setUser] = useState({
    username:"",
    password:"",
  })
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=' w-96 flex gap-5 p-5 shadow border border-gray-500'>
        
      <input placeholder='username' type='text' value={user.username} onChange={(e)=>setUser({...user,username: e.target.value})}/>
    <input placeholder='password' type='password' value={user.password} onChange={(e)=>setUser({...user,password: e.target.value})}/>
    <button className='bg-black text-white p-2' onClick={login}>Login</button>
      </div>
   </div>
  )
}
