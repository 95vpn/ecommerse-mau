import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './styles/loginPage.css'

const LoginPage = () => {

  const createToken = useAuth();

  const { handleSubmit, register, reset } = useForm();

  const submit = data => {
    console.log(data)
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    // createToken(url, data)
    reset({
      email: '',
      password: '',
    });
  }

  return (
    <div className='login-container'>
      <form className='login-container-form' onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="user">User:</label>
          <input {...register('email')} id='user' type="email" />
        </div>
        <div>
          <label htmlFor="key">Password:</label>
          <input {...register('password')} id='key' type="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage;