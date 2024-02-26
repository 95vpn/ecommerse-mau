import React from 'react'
import './styles/productCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ prod }) => {
    //

    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/product/${prod.id}`)
    }

    return (
        <div className='product-card'> ProductCard
            <figure onClick={handleView} className='product-card-figure'>
                <img src={prod.images[0].url} alt="product image" />
                <img src={prod.images[1].url} alt="product image" />
            </figure>
            <hr />
            <ul className='product-card-info'>
                <li><span>{prod.brand}</span><span>{prod.title}</span></li>
                <li><span>Price:</span><span>{prod.price}</span></li>
            </ul>
            <div className='product-card-button'>
                <button>Add to Cart</button>
                <button onClick={handleView}>View More</button>
            </div>
        </div>
    )
}

export default ProductCard