import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {message} from "antd";
import { useSelector,useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import axios from "axios";

export default function AdminCourse() {

  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const onFinish = async (values) =>{
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/portfolio/update-course", {
        ...values,
        _id: portfolioData.course._id,
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
    <Form initialValues={portfolioData.course} className='p-8 bg-blue-50 ' onFinish={onFinish} layout='vertical'>
      <Form.Item name="title" label="title">
        <input placeholder='title'></input>
      </Form.Item>
      <Form.Item name="description" label="description">
        <input placeholder='description'></input>
      </Form.Item>
      <Form.Item name="image" label="image">
        <input placeholder='image'></input>
      </Form.Item>
      <Form.Item name="link" label="link">
        <input placeholder='link'></input>
      </Form.Item>
      <button className='rounded-lg text-white bg-blue-500 bg-slate-500 p-2' type='submit'>
        save
      </button>
    </Form>
 
  )
}
