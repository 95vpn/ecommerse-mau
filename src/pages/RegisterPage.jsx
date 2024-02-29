import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import './styles/registerPage.css'

const RegisterPage = () => {

  const createUser = useAuth();
  const { handleSubmit, register, reset } = useForm();
  
  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    console.log(data)
    createUser(url, data);
    reset({ 
      email:'',
      firsName:'',
      lastName:'',
      password:'',
      phone:''
    });
  }

  return (
    <div className='register-page-container'>
      <form className='register-page-container-form' onSubmit={handleSubmit(submit)} >
        <div className='register-page-container-form-name'>
          <label htmlFor="name">Name:</label>
          <input {...register('firstName')} id='name' type="text" />
        </div>
        <div className='register-page-container-form-name'>
          <label htmlFor="last">Last Name:</label>
          <input {...register('lastName')} id='last' type="text" />
        </div>
        <div className='register-page-container-form-name'>
          <label htmlFor="email">Email:</label>
          <input {...register('email')} id='email' type="email" />
        </div>
        <div className='register-page-container-form-name'>
          <label htmlFor="password">Password:</label>
          <input {...register('password')} id='password' type="password" />
        </div>
        <div className='register-page-container-form-name'>
          <label htmlFor="phone">Phone:</label>
          <input {...register('phone')} id='phone' type="number" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage;