import React from 'react';
import './styles/purchasesCart.css'

const PurchasesCart = ({ prod }) => {
  console.log(prod);

  const sumaProd = () => {
    let addTotal = 0;
    // if (prod.product && prod.product.id && prod.quantity) {
    const { price } = prod.product;
    const { quantity } = prod;
    addTotal = price * quantity
    return addTotal

  }
  // console.log(prod.product[id])

  return (
    <div className='purchases-cart-container'>
      <figure>
        <img src={prod.product.images[0].url} alt="product images" />
      </figure>

      <div className='purchases-cart-container-quantity'>
        <h3>{prod.product.title}</h3>
        <ul className='purchases-cart-container-quantity-list'>
          <li>{prod.quantity}</li>
          <li>$ {sumaProd()}</li>
        </ul>
      </div>

    </div>
  )
}

export default PurchasesCart;