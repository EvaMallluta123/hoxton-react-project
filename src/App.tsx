import { useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Categories } from "./pages/Categories";
import { CategoryItem } from "./pages/CategoryItem";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <>
        <main>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories/>} />
            <Route path='/categories/:id' element={<CategoryItem />} />
            <Route path="/basket" />
            <Route path="/sing-in" />
          </Routes>
        </main>
      </> */}
  
  <section className="basket">
  <h2>Welcome to your Basket</h2>
  <ul>
  <li >
      <article className='basket_item'>
        <img src="src/image/lodra1.webp" alt="jfkjasfdkdsajfkjk" width='90' />
        <p>sjdlkjdkAJFKDSJKF</p>
        <p>
          Qty:
          <select>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </p>
        <p>Item total: £1234</p>
      </article>
    </li>
  </ul>
  <h3>Your total: £123</h3>


  </section>
    </div>
  );
}

export default App;
