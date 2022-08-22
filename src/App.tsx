import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
   <Header />
   <li className="product">
   {/* <Link to={`/products/${product.id}`}> */}



   <article className="product-item">
  <img src="https://www.neptun.al/2022/08/11/TL3686.JPG?width=185" alt="" />
  <h4>SAMSUNG GALAXY Z Fold4 5G Green</h4>
</article>

<article className="product-item">
  <img src="https://www.neptun.al/2022/08/11/TL3686.JPG?width=185" alt="" />
  <h4>SAMSUNG GALAXY Z Fold4 5G Green</h4>
</article>


<article className="product-item">
  <img src="https://www.neptun.al/2022/08/11/TL3686.JPG?width=185" alt="" />
  <h4>SAMSUNG GALAXY Z Fold4 5G Green</h4>
</article>
{/* </Link> */}
</li>
   </div>
  )
}

export default App;
