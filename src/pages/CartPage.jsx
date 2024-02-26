import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {

  const cart = useSelector(store => store.cart)
  console.log(cart)


  return (
    <div>CartPage</div>
  )
}

export default CartPage;