import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function CartModal({ closeCartModal }) {
  const { cart, setCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cart.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const addInCart = (item) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex !== -1) {
      updatedCart[itemIndex].qty++;
    }
    setCart(updatedCart);
  };

  const removeInCart = (item) => {
    const updatedCart = [...cart];

    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex !== -1) {
      updatedCart[itemIndex].qty--;
      if (updatedCart[itemIndex].qty === 0) {
        updatedCart.splice(itemIndex, 1);
      }
    }
    setCart(updatedCart);
  };

  const placeOrder = (price) => {
    alert(`Order successfully with total payment is $${price}`);
    console.log(`Order successfully with total payment is $${price}`);
    setCart([]);
    closeCartModal();
  };
  return (
    <div id="overlay">
      <div className="cart-background" onClick={() => closeCartModal()}></div>
      <div className="cart-modal">
        <h2>Your order</h2>
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <div className="cart-item-figures">
                  <span className="cart-item-price">${item.price}</span>
                  <span className="cart-item-qty">x {item.qty}</span>
                </div>
              </div>
              <div className="cart-item-btn-group">
                <button onClick={() => addInCart(item)}>+</button>
                <button onClick={() => removeInCart(item)}>-</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total-price">
          <span>Total Price</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="cart-btn-group">
          <button
            className="cart-checkout-btn cart-btn"
            onClick={() => placeOrder(totalPrice.toFixed(2))}
          >
            Order
          </button>
          <button
            className="cart-close-btn cart-btn"
            onClick={() => closeCartModal()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
