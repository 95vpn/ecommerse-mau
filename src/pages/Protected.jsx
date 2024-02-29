import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  if (localStorage.getItem('token')) {
    return <Outlet/>
  } else {
    return <Navigate to='/login'/>
  }
}

export default Protected;