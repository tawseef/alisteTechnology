import React, { useContext } from "react";
import "./products.css";
import { DataContext } from "../context/context";
import ProductDetail from "../ProductDetail/ProductDetail";

function Products() {
  const data = useContext(DataContext);

  return (
    <div>
      {data.checkProduct !== 0 ? (
        <div>
          <ProductDetail />
        </div>
      ) : (
        <div className="productsContainer">
          {data.ProductList.map((product) => (
            <div
              className="productWrapper"
              onClick={() => data.setCheckProduct(product.id)}
              key={product.id}
            >
              <div className="productTitle">
                {product.title.length > 17
                  ? product.title.slice(0, 17) + "..."
                  : product.title}
              </div>
              <div className="productImage">
                <img
                  src={product.image}
                  alt={product.title}
                  className="productImgSize"
                />
              </div>
              <div className="productPrice">Price: ${product.price}</div>
              <div className="productRating">Rating: {product.rating.rate}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
