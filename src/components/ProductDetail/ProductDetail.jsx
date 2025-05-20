import React, { useContext } from "react";
import "./productDetail.css";
import { DataContext } from "../context/context";

function ProductDetail() {
  const data = useContext(DataContext);

  const product = data.ProductList.filter((x) => x.id === data.checkProduct);

  const handleAddToCart = () => {
    data.setCart([...data.cart, product]);
    alert(`Added "${product[0].title}" to cart`);
  };

  return (
    <div className="product-page">
      <div className="product-card">
        <img
          src={product[0].image}
          alt={product.title}
          className="product-img"
        />

        <div className="product-info">
          <h2 className="product-title">{product[0].title}</h2>
          <p className="product-description">{product[0].description}</p>
          <p className="product-category">
            <strong>Category:</strong> {product[0].category}
          </p>

          <p className="product-price">
            <strong>Price:</strong> ${product[0].price}
          </p>

          <p className="product-rating">
            <strong>Rating:</strong> {product[0].rating.rate} ⭐ (
            {product[0].rating.count} reviews)
          </p>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button
            className="add-to-cart-btn"
            onClick={() => data.setCheckProduct(0)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
