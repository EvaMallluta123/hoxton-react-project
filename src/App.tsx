import { useState } from "react";
import "./App.css";
import { Link, Routes , Route} from "react-router-dom";
import { Header } from "./Components/Header";
import { Products } from "./Components/Products";

function App() {
  return (
    <div className="App">
   <Header />
   <>
   <main>
   <Routes>
   <Route path='/products' element={<Products />} />
   </Routes>
   </main>
   </>
   </div>
  )
}

export default App;
