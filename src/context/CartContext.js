import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const productIndex = cart.findIndex((product) => product.id === item.id);
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      const product = updatedCart[productIndex];
      product.qty += quantity;
      setCart(updatedCart);
    } else {
      const newProduct = {
        id: item.id,
        name: item.name,
        qty: quantity,
        price: item.price,
      };
      const updatedCart = [...cart, newProduct];
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
