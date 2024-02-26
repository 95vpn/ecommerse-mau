import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../HomePage/ProductCard';

const SimilarItems = ({ categoryId, prodId }) => {
    

    const [productsByCategory, getProductsByCategory] = useFetch();

    useEffect(() => {
        if (categoryId) {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`
            getProductsByCategory(url);
        }
    }, [categoryId]);
    

    const cbFilter = (prod) => {
        return prod.id !== +prodId
    }

    return (
        <div >
            <h2>Discover Similar Items</h2>
            <div className='products-container'>
                {
                    productsByCategory?.filter(cbFilter).map(prod => (
                        <ProductCard
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SimilarItems;