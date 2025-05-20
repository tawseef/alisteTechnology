import React from 'react';
import './productDetail.css';

function ProductDetail() {
  const product = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  const handleAddToCart = () => {
    alert(`Added "${product.title}" to cart`);
  };

  return (
    <div className='product-page'>
      <div className='product-card'>
        <img src={product.image} alt={product.title} className='product-img' />

        <div className='product-info'>
          <h2 className='product-title'>
            {product.title.length > 50 ? product.title.slice(0, 50) + '...' : product.title}
          </h2>

          <p className='product-description'>{product.description}</p>
          <p className='product-category'><strong>Category:</strong> {product.category}</p>

          <p className='product-price'><strong>Price:</strong> ${product.price}</p>

          <p className='product-rating'>
            <strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)
          </p>

          <button className='add-to-cart-btn' onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
