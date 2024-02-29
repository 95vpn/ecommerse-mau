import React from 'react'
import './styles/cardProduct.css'
import { deleteCartThunk, updateCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const CardProduct = ({ prod }) => {
    const dispatch = useDispatch();

    const handleLest = () => {
        if (prod.quantity > 1) {
            dispatch(updateCartThunk(prod, -1))
        }
    }

    const handlePlus = () => {
        dispatch(updateCartThunk(prod, 1))
    }

    const handleRemove = () => {
        dispatch(deleteCartThunk(prod.id))
    }

    return (
        prod.product &&
        <div className='cart-product-container'>
            <figure className='cart-product-container-figure'>
                <img src={prod.product.images[0].url} alt="product image" />
            </figure>
            <div className='cart-product-container-info'>
                <h2>{prod.product.title}</h2>
                <div  className='cart-product-container-info-buttons'>
                    <button onClick={handleLest}>-</button>
                    <span>{prod.quantity}</span>
                    <button onClick={handlePlus}>+</button>
                </div>
                <h3>Total Product: $ {prod.product.price * prod.quantity}</h3>
            </div>
            <button className='cart-product-container-buttons' onClick={handleRemove}>Delete</button>
        </div>
    )
}

export default CardProduct