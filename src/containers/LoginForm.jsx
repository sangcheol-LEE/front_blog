import React,{useState,} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../module/auth';
import AuthForm from '../components/auth/AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const form = useSelector(state => state.authReducer)

  // 인풋 변경 이벤트 핸들러
  const handleChange = e => {
    const {value, name} = e.target;
    dispatch(
      changeField({
        key : name,
        value
      })
    )
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <AuthForm 
      type="login"
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
      
  );
};

export default LoginForm;