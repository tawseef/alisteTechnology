import React, { useContext, useEffect } from "react";
import "./cart.css";
import { DataContext } from "../context/context";

function Cart() {
  const { setFlag, cart, setCart } = useContext(DataContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) =>
      item[0].id === id
        ? [{ ...item[0], quantity: (item[0].quantity || 1) + 1 }]
        : item
    );
    setCart(updatedCart);
  };

  const handleDecrement = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item[0].id === id) {
          const newQty = (item[0].quantity || 1) - 1;
          if (newQty <= 0) return null;
          return [{ ...item[0], quantity: newQty }];
        }
        return item;
      })
      .filter(Boolean);
    setCart(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item[0].id !== id);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item[0].price * (item[0].quantity || 1),
      0
    );
  };

  const handleCheckout = () => {
    alert("Checkout successful!");
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div>
      <div className="cart-page">
        <h2>🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item[0].id}>
                <img
                  src={item[0].image}
                  alt={item[0].title}
                  className="cart-img"
                />
                <div className="cart-details">
                  <h4>{item[0].title}</h4>
                  <p>Price: ${item[0].price}</p>
                  <p>Quantity: {item[0].quantity || 1}</p>
                  <div className="cart-controls">
                    <button onClick={() => handleIncrement(item[0].id)}>
                      +
                    </button>
                    <button onClick={() => handleDecrement(item[0].id)}>
                      -
                    </button>
                    <button onClick={() => handleRemove(item[0].id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <div className="back-btn-div">
        <button className="checkout-btn back-btn" onClick={() => setFlag(0)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Cart;
