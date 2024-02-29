import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import getToken from '../utils/getToken';
import PurchasesCart from '../components/purchasesPage/PurchasesCart';
import './styles/purchasesPage.css'
const PurchasesPage = () => {

  const [ purchases, getPurchases ] = useFetch();

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
    getPurchases(url, getToken())
  }, [])
  
  console.log(purchases)


  return (
    <div className='purchases-container'>
      <h1>My Purchases</h1>
      {
        purchases?.map(prod => (
          <PurchasesCart
            key={prod.id}
            prod={prod}
          />
        ))
      }
    </div>
  )
}

export default PurchasesPage;