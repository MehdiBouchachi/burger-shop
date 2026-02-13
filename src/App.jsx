import { useState } from "react";
import "./App.css";

const burgers = [
  {
    id: 1,
    title: "Classic Burger",
    price: 8,
    image: "/classic-burger.jpg",
    description: "A timeless classic made with premium beef.",
    ingredients: ["Beef patty", "Lettuce", "Tomato", "Cheese"],
    soldOut: false,
  },
  {
    id: 2,
    title: "Double Cheese",
    price: 11,
    image: "/double-cheese-burger.jpg",
    description: "Twice the beef, twice the flavor.",
    ingredients: ["Double beef", "Double cheddar", "Onions"],
    soldOut: false,
  },
  {
    id: 3,
    title: "BBQ Burger",
    price: 10,
    image: "/bbq-burger.jpg",
    description: "Smoky BBQ experience.",
    ingredients: ["Beef", "BBQ sauce", "Crispy onions"],
    soldOut: false,
  },
  {
    id: 4,
    title: "Chicken Burger",
    price: 9,
    image: "/chicken-burger.jpg",
    description: "Juicy grilled chicken.",
    ingredients: ["Grilled chicken", "Mayo", "Lettuce"],
    soldOut: false,
  },
  {
    id: 5,
    title: "Spicy Burger",
    price: 10,
    image: "/spicy-burger.jpg",
    description: "For spice lovers.",
    ingredients: ["Beef", "Jalapeños", "Spicy sauce"],
    soldOut: false,
  },
  {
    id: 6,
    title: "Veggie Burger",
    price: 7,
    image: "/veggie-burger.jpeg",
    description: "Fresh and plant-based.",
    ingredients: ["Plant patty", "Avocado", "Tomato"],
    soldOut: true,
  },
];

export default function App() {
  const [isOpen] = useState(true);

  return (
    <div className="app">
      <header>
        <h1>🍔 React Burger Shop</h1>
        <p className="header-sub">Crafted with premium ingredients & passion</p>
      </header>

      <main className="burger-list">
        {burgers.map((burger) => (
          <div
            key={burger.id}
            className={`burger-card ${burger.soldOut ? "sold-out" : ""}`}
          >
            <div className="image-wrapper">
              <img src={burger.image} alt={burger.title} />
            </div>

            <div className="card-content">
              <h3>{burger.title}</h3>

              <p className="description">{burger.description}</p>

              <p className="ingredients">{burger.ingredients.join(" • ")}</p>

              <div className="price-line">
                <span className="price">${burger.price}</span>

                {burger.soldOut && <span className="sold-text">Sold Out</span>}
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="footer">
        {isOpen ? (
          <button className="order-btn">Order Now</button>
        ) : (
          <p className="closed-msg">
            We are closed. We will open tomorrow from 8:00 AM to 9:00 PM.
          </p>
        )}
      </footer>
    </div>
  );
}
