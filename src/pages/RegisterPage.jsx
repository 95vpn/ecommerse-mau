import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const RegisterPage = () => {

  const createUser = useAuth();
  const { handleSubmit, register, reset } = useForm();
  
  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    console.log(data)
    // createUser(url, data);
    reset({ 
      email:'',
      firsName:'',
      lastName:'',
      password:'',
      phone:''
    });
  }

  return (
    <div>RegisterPage
      <form onSubmit={handleSubmit(submit)} >
        <div>
          <label htmlFor="name">Name:</label>
          <input {...register('firsName')} id='name' type="text" />
        </div>
        <div>
          <label htmlFor="last">Last Name:</label>
          <input {...register('lastName')} id='last' type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input {...register('email')} id='email' type="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input {...register('password')} id='password' type="password" />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input {...register('phone')} id='phone' type="number" />
        </div>
        <button>Submit</button>

      </form>
    </div>
  )
}

export default RegisterPage;