
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './products.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='productsContainer'>
      {products.map((product) => (
        <div className='productWrapper' key={product.id}>
          <div className='productTitle'>
            {product.title.length > 17 ? product.title.slice(0, 17) + '...' : product.title}
            </div>
          <div className='productImage'>
            <img src={product.image} alt={product.title} className='productImgSize' />
          </div>
          <div className='productPrice'>Price: ${product.price}</div>
          <div className='productRating'>Rating: {product.rating.rate}</div>
        </div>
      ))}
    </div>
  );
}

export default Products;
