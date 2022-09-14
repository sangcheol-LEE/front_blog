import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../module/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const {form} = useSelector(({authReducer}) => ({
    form : authReducer.register
  }))

  // 인풋 변경 이벤트 핸들러
  const handleChange = e => {
    const {value, name} = e.target;
   
    dispatch(
      changeField("register", name, value)
      )
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  console.log("form", form)
  return (
    <AuthForm 
      type="register"
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
      
  );
};

export default RegisterForm;