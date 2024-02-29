import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk, setCar } from '../store/slices/cart.slice';
import CardProduct from '../components/cardPage/CardProduct';
import useAuth from '../hooks/useAuth';
import getToken from '../utils/getToken';
import './styles/cartPage.css'


const CartPage = () => {

  const cart = useSelector(store => store.cart)
  console.log(cart)
  const dispatch = useDispatch();
  const createBuy = useAuth();

  useEffect(() => {
    dispatch(getCartThunk());
  }, [])

  const handleTotals = () => {
    return cart.reduce((ac, cv) => cv.product && ac + (cv.quantity * cv.product.price), 0)
  }

  const handleBuy = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
    createBuy(url, '', getToken());
    dispatch(setCar([]));
  }

  //console.log(cart.reduce((ac, cv) => ac + (cv.quantity * cv.product.price), 0))
  console.log(cart)

  return (

    <div className='cart-page-container'>
      <div className='cart-page-container-products'>
        {
          cart?.map(prod => (
            <CardProduct
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
      <div className='cart-page-container-buy'>
        <h3>Total buy: $ {handleTotals()}</h3>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </div>
  )

}

export default CartPage;