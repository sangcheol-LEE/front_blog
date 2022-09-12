import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../module/auth';
import AuthForm from '../components/auth/AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const {form} = useSelector(({ authReducer }) => ({
    form : authReducer
  }))

  // 인풋 변경 이벤트 핸들러
  const  handleChange = e => {
    const {value, name} = e.target;
    dispatch(
      changeField({
        form : "login",
        key : name,
        value
      })
    )
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  useEffect(() => {
    dispatch(initializeForm("login"))
  },[dispatch])


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