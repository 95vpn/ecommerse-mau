import React, { useState } from 'react';
import './styles/infoProduct.css'
import { postCartThunk, updateCartThunk } from '../../store/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';

const InfoProduct = ({ productId }) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector( store => store.cart )

    const handleLess = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {
        const item = cart.filter(prod => prod.productId === productId.id)
        if (item[0]) {
            dispatch(updateCartThunk(...item, quantity))
        } else {
            dispatch(postCartThunk({
                quantity: quantity,
                productId: productId.id,
            }));
        }
    }

    return (
        <div className='info-product-container'>
            <div className='info-product-container-name'>
                <h2>{productId?.brand}</h2>
                <h3>{productId?.title}</h3>
                <p>{productId?.description}</p>
            </div>
            <div className='info-product-container-price'>
                <ul>
                    <li>Price:</li>
                    <li>${productId?.price}</li>
                </ul>
                <div className='info-product-container-price-quantity'>
                    <p>Quantity</p>
                    <ul className='info-product-container-price-quantity-products'>
                        <li><button onClick={handleLess}>-</button></li>
                        <li><span>{quantity}</span></li>
                        <li><button onClick={handlePlus}>+</button></li>
                    </ul>
                </div>
            </div>
            <button className='info-product-container-buttons' onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default InfoProduct;