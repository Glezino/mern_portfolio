import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {message} from "antd";
import { useSelector,useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import axios from "axios";

export default function AdminIntro() {

  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const onFinish = async (values) =>{
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id,
      });
      dispatch(hideLoading())
      if (response.data.success){
        message.success(response.data.message)
      } 
      else {
        message.error(response.data.message)
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message)
    }
  }

  return (
    <Form initialValues={portfolioData.intro} className='p-8 bg-blue-50' onFinish={onFinish} layout='vertical'>
      <Form.Item name="welcomeText" label="Welcome Text">
        <input placeholder='Welcome Text'></input>
      </Form.Item>
      <Form.Item name="firstName" label="First Name">
        <input placeholder='First Name'></input>
      </Form.Item>
      <Form.Item name="lastName" label="Last Name">
        <input placeholder='Last Name'></input>
      </Form.Item>
      <Form.Item name="caption" label="Caption">
        <input placeholder='Caption'></input>
      </Form.Item>
      <Form.Item name="description" label="Description">
        <input textarea='Description'></input>
      </Form.Item>
      <button className='rounded-lg text-white bg-blue-500 bg-slate-500 p-2' type='submit'>
        save
      </button>
    </Form>
 
  )
}
