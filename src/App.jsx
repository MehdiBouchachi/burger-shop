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
    image: "/veggie-burger.jpg",
    description: "Fresh and plant-based.",
    ingredients: ["Plant patty", "Avocado", "Tomato"],
    soldOut: true,
  },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>🍔 React Burger Shop</h1>
      <p className="header-sub">Crafted with premium ingredients & passion</p>
    </header>
  );
}

function Main() {
  return <BurgerList />;
}

function Footer() {
  function isShopOpen() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return (
      (hours > 8 || (hours === 8 && minutes >= 0)) &&
      (hours < 21 || (hours === 21 && minutes === 0))
    );
  }
  return (
    <footer className="footer">
      {isShopOpen() ? (
        <button className="order-btn">Order Now</button>
      ) : (
        <p className="closed-msg">
          We are closed. We will open tomorrow from 8:00 AM to 9:00 PM.
        </p>
      )}
    </footer>
  );
}

function BurgerList() {
  return (
    <main className="burger-list">
      {burgers.map((burger) => (
        <BurgerCard key={burger.id} burger={burger} />
      ))}
    </main>
  );
}

function BurgerCard({ burger }) {
  const { id, title, price, image, description, ingredients, soldOut } = burger;
  return (
    <div key={id} className={`burger-card ${soldOut ? "sold-out" : ""}`}>
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>

        <p className="description">{description}</p>

        <p className="ingredients">{ingredients.join(" • ")}</p>

        <div className="price-line">
          <span className="price">${price}</span>

          {soldOut && <span className="sold-text">Sold Out</span>}
        </div>
      </div>
    </div>
  );
}
