import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza.Co</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato , mozarella , spinach and ricotto cheese"
        photoName="pizzas/spinaci.jpg"
        price="20"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price="13"
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props)
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // return React.createElement('footer',null,"We're Currently open");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're Currently Open{" "}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// import ReactDOM from "react-dom"
// ReactDOM.render(<App/>,document.querySelector('root'));
