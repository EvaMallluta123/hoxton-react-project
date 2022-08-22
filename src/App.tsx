import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-logo">e-ShopiAl</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="products"> Products</Link>
            </li>
            <li>
              <Link to="categories"> Categories</Link>
            </li>
            <li>
              <Link to="basket">Basket</Link>
            </li>
            <li>
              <Link to="sing-in"> Sing-In</Link>
            </li>
            <li>
              <button>Sign Out</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
