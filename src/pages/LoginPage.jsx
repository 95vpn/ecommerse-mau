import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './styles/loginPage.css'
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const createToken = useAuth();

  const { handleSubmit, register, reset } = useForm();

  const submit = data => {
    console.log(data)
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    createToken(url, data)
    reset({
      email: '',
      password: '',
    });
  }

  return (
    <div className='login-container'>
      <form className='login-container-form' onSubmit={handleSubmit(submit)}>
        <div className='login-container-form-name'>
          <label htmlFor="user">User:</label>
          <input {...register('email')} id='user' type="email" />
        </div>
        <div className='login-container-form-name'>
          <label htmlFor="key">Password:</label>
          <input {...register('password')} id='key' type="password" />
        </div>
        <button>Submit</button>
        <p className='login-container-parr'>If you are not registered yet then you can </p>
        <span><Link to='/register'>register here</Link></span>
      </form>
    </div>
  )
}

export default LoginPage;