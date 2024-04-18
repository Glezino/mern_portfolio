import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {message} from "antd";
import { useSelector,useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import axios from "axios";

export default function AdminContact() {

  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const onFinish = async (values) =>{
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
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
    <Form initialValues={portfolioData.contact} className='p-8 bg-blue-50' onFinish={onFinish} layout='vertical'>
      <Form.Item name="name" label="name">
        <input placeholder='name'></input>
      </Form.Item>
      <Form.Item name="email" label="email">
        <input placeholder='email'></input>
      </Form.Item>
      <Form.Item name="mobile" label="mobile">
        <input placeholder='mobile'></input>
      </Form.Item>
      <Form.Item name="age" label="age">
        <input placeholder='age'></input>
      </Form.Item>
      <Form.Item name="address" label="address">
        <input placeholder='address'></input>
      </Form.Item>

      <button className='rounded-lg text-white bg-blue-500 bg-slate-500 p-2' type='submit'>
        save
      </button>
    </Form>
 
  )
}
