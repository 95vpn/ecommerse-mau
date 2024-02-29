import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'
import PurchasesPage from './pages/PurchasesPage'
import ProductIdPages from './pages/ProductIdPages'
import LoginPage from './pages/LoginPage'
import HeaderNav from './components/shared/HeaderNav'
import Protected from './pages/Protected'

function App() {

  return (
    <div>
      <HeaderNav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductIdPages />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<Protected/>}>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/purchases' element={<PurchasesPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
