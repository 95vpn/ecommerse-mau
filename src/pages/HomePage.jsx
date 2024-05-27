import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/HomePage/ProductCard';
import './styles/homePage.css'
import SelectCategory from '../components/HomePage/SelectCategory';
import FormPrice from '../components/HomePage/FormPrice';



const HomePage = () => {
  const [formValue, setFormValue] = useState({
    from: 0,
    to: Infinity,
  });
  const [selectValue, setSelectValue] = useState(0);
  const [productName, setProductName] = useState('');
  const products = useSelector(store => store.products);
  const dispatch = useDispatch();



  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    dispatch(getProductsThunk(url));
  }, [])


  const textInput = useRef();

  const handleSearch = () => {
    setProductName(textInput.current.value.toLowerCase().trim())
  }



  const cbFilter = (prod) => {
    const { from, to } = formValue;
    const ByName = prod.title.toLowerCase().includes(productName);
    const ByCategory = +selectValue === 0 ? true : prod.categoryId === +selectValue;
    const ByPrice = +prod.price > +from && +prod.price < +to;
    return ByName && ByCategory && ByPrice;
  }

  console.log(formValue)

 

  return (
    <div className='container-homePage'>
      <div className='filters-container'>
        {/* <h1>ECOMMERSE</h1> */}
        
        <FormPrice
          setFormValue={setFormValue}
        />
        <hr />
        <div className='filters-container-name'>
          <p>By Name</p>
          <input type="text" ref={textInput} onChange={handleSearch} placeholder='Introduce Product Name' />
        </div>
        <SelectCategory
          setSelectValue={setSelectValue}
        />
      </div>
      <section className='products-container'>
        {
          products?.filter(cbFilter).map((prod) => (
            <ProductCard
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </section>
    </div>
  )
}

export default HomePage;

