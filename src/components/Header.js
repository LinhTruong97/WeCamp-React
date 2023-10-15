import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartModal = () => {
    setIsCartOpen(true);
  };

  const closeCartModal = () => {
    setIsCartOpen(false);
  };
  const totalQuantity = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <>
      <header className="header">
        <h1>Food Court</h1>
        <button className="header-cart-button" onClick={openCartModal}>
          <span className="header-cart-icon">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
            />
          </span>
          <span className="header-cart-title">Your Cart</span>
          <span className="header-cart-total-quantity">{totalQuantity}</span>
        </button>
        {isCartOpen && <CartModal closeCartModal={closeCartModal} />}
      </header>
      <div className="header-image">
        <img
          src="https://www.shutterstock.com/image-photo/top-view-fully-set-rustic-260nw-772641289.jpg"
          alt="Table with full of foods"
        />
      </div>
    </>
  );
}

export default Header;
