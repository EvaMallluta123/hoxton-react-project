import { useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Categories } from "./pages/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <main>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/basket" />
            <Route path="/sing-in" />
          </Routes>
        </main>
      </>
  
    </div>
  );
}

export default App;
