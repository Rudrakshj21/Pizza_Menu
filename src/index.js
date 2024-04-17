import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

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
  const pizzaDataArray = pizzaData;
  const numPizza = pizzaDataArray.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <ul className="pizzas">
          {pizzaDataArray.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu .Please come back later</p>
      )}

      {/* <Pizza
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
      /> */}
    </main>
  );
}

function Pizza(props) {
  // console.log(props);
  if (props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <h1>{props.pizzaObj.price}$</h1>
      </div>
    </li>
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
      {isOpen ? (
        <Order closeHour = { closeHour}/>
      ) : (
        <p>
          We're happy to Welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  console.log(props);
  return ( 
    <div className="order">
      <p>We're Open until {props.closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
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
