import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function MealItem({ item }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(item, quantity);
    setQuantity(1);
  };

  return (
    <>
      <div>
        <h3 className="item-name">{item.name}</h3>
        <div className="item-description">{item.description}</div>
        <div className="item-price">${item.price}</div>
      </div>
      <div className="item-form">
        <div className="quantity-input">
          <label htmlFor={`quantity_${item.id}`}>Quantity</label>
          <input
            id={`quantity_${item.id}`}
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
        </div>
        <button className="item-add-btn" onClick={handleAddToCart}>
          Add
        </button>
      </div>
    </>
  );
}

export default MealItem;
