import React, { useEffect } from 'react';
import InfoProduct from '../components/ProductIdPage/InfoProduct';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import SimilarItems from '../components/ProductIdPage/SimilarItems';
import SliderImages from '../components/ProductIdPage/SliderImages';

const ProductIdPages = () => {

    const [ productId, getProductId ] = useFetch();
    const param = useParams();

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`
        getProductId(url)
    }, [param]);

  return (
    <div>
        <SliderImages
            images={productId?.images}
        />
        <InfoProduct
            productId={productId}
        />
        <SimilarItems
            categoryId={productId?.categoryId}
            prodId={param.id}
        />
    </div>
  )
}

export default ProductIdPages;