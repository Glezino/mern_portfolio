import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {message} from "antd";
import { useSelector,useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import axios from "axios";

export default function AdminAbout() {

  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const onFinish = async (values) =>{
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
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
    <Form initialValues={portfolioData.about} className='p-8 bg-blue-50' onFinish={onFinish} layout='vertical'>
      <Form.Item name="lottieURL" label="lottieURL">
        <input placeholder='lottieURL'></input>
      </Form.Item>
      <Form.Item name="description1" label="description1">
        <input placeholder='description1'></input>
      </Form.Item>
      <Form.Item name="description2" label="description2">
        <input placeholder='description2'></input>
      </Form.Item>
      <Form.Item name="skills" label="skills">
        <input textarea='skills'></input>
      </Form.Item>
      <button className='rounded-lg text-white bg-blue-500 bg-slate-500 p-2' type="submit">
        save
      </button>
    </Form>
  )
}
