import React, { useContext } from "react";
import Products from "../Products/Products";
import Navbar from "../Navbar/Navbar";
import { DataContext } from "../context/context";
import Cart from "../Cart/Cart";

function HomePage() {
  const data = useContext(DataContext);

  return (
    <div>
      <Navbar />
      <div>{data.flag === 0 ? <Products /> : <Cart />}</div>
    </div>
  );
}

export default HomePage;
