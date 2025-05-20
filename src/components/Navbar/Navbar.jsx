import React, { useContext } from "react";
import icon from "../../assets/cart-icon.png";
import "./navbar.css";
import { DataContext } from "../context/context";

function Navbar() {
  const data = useContext(DataContext);

  return (
    <div>
      <div className="navbarWrapper">
        <div className="storeTitle">The E Commerce Store</div>
        <div onClick={() => data.setFlag(1)}>
          <img className="cartIcon" src={icon} alt="Not Found" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
