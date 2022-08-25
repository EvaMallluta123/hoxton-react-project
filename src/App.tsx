import { useEffect, useState } from "react";
import "./App.css";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "./Components/Header";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Categories } from "./pages/Categories";
import { CategoryItem } from "./pages/CategoryItem";
import { Basket } from "./pages/Basket";
import { BasketItem, Product, User } from "./type";
import { SignIn } from "./pages/SingIn";

function App() {
  const [user, setUser] = useState<null | User>(null)
  const [itemToBeAdded, setItemToBeAdded] = useState<Product | null>(null)

  function signIn (user: User) {
    localStorage.id = user.id
    setUser(user)
  }

  function signOut () {
    localStorage.removeItem('id')
    setUser(null)
  }

  const navigate = useNavigate()

  function createItem (product: Product) {
    if (user === null) {
      return
    }
    fetch(`http://localhost:4000/basket`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId: product.id,
        quantity: 1,
        userId: user.id
      })
    })
  }

  function updateQuantity (item: BasketItem) {
      fetch(`http://localhost:4000/basket/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quantity: item.quantity + 1 })
    })
  }

  function addItemToBasket (product: Product) {
    if (user === null) {
      navigate('/sign-in')
      setItemToBeAdded(product)
      return
    }
    fetch(
      `http://localhost:4000/basket?productId=${product.id}&userId=${user.id}`
    )
      .then(resp => resp.json())
      .then(results => {
        if (results.length === 0) createItem(product)
        else updateQuantity(results[0])
      })
      .then(() => navigate('/basket'))
  }

  useEffect(() => {
    const userId = localStorage.id
    if (userId) {
      fetch(`http://localhost:4000/users/${userId}`)
        .then(resp => resp.json())
        .then(userFromServer => {
          setUser(userFromServer)
          navigate('/basket')
        })
    } else {
      navigate('/sign-in')
    }
  }, [localStorage.id])

  useEffect(() => {
    if (user && itemToBeAdded) {
      console.log('Adding item to basket', user, itemToBeAdded)
      addItemToBasket(itemToBeAdded)
      setItemToBeAdded(null)
    }
  }, [itemToBeAdded, user])

  return (
    <div className="App">
      <Header signOut={signOut} />
      <>
        <main>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route
            path='/products/:id'
            element={<ProductDetail addItemToBasket={addItemToBasket} />}
          />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<CategoryItem />} />
            <Route path="/basket" element={<Basket user={user} />} />
            <Route path='/sign-in' element={<SignIn signIn={signIn} />} />
          </Routes>
        </main>
      </>
    </div>
  );
}

export default App;
