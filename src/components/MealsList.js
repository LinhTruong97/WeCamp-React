import React from "react";
import MealItem from "./MealItem";

const menuItems = [
  {
    id: 1,
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: 3,
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 4,
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function MealsList() {
  return (
    <section className="menu">
      <div className="menu-card">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <MealItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MealsList;
