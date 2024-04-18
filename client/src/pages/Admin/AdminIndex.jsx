import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import AdminProject from './AdminProject';
import AdminExperience from './AdminExperience';
import AdminContact from './AdminContact';
import AdminCourse from './AdminCourse';
// import '../../css/admin.css';

export default function AdminIndex() {

  const { portfolioData } = useSelector((state) => state.root);

  const adminItems = [
    {
      key: '1',
      label: 'Intro',
      children:<AdminIntro/>,
    },
    {
      key: '2',
      label: 'About',
      children: <AdminAbout/>,
    },
    {
      key: '3',
      label: 'Course',
      children: <AdminCourse/>,
    },
    {
      key: '4',
      label: 'Project',
      children: <AdminProject/>,
    },
    {
      key: '5',
      label: 'Experience',
      children: <AdminExperience/>,
    },
    {
      key: '6',
      label: 'Contact',
      children: <AdminContact/>,
    },
  ];

  useEffect(() => {
    if(!localStorage.getItem("token")){
      window.location.href = "/admin-login"
    }
  }, [])

  return (
<div>
  <div className='text-center p-2'>
    <button className='bg-red-500 rounded-lg text-white px-2' onClick={()=>{
      localStorage.removeItem("token");
      window.location.href ="/admin-login"
    }}>Logout</button>
  </div>
    {portfolioData && (
    <Tabs
    defaultActiveKey="1"
    centered
    items={adminItems}/>
      )}
      </div>
  )
}

