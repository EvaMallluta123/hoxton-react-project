import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BasketCard } from "../Components/BasketCard";
import { BasketItem, User } from "../type";


type Props = {
  user: User | null
}

export function Basket ({ user }: Props) {
  const [basket, setBasket] = useState<BasketItem[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/users/${user.id}/basket?_expand=product`)
    //  fetch(`http://localhost:4000/products/${user.id}`)
        .then(resp => resp.json())
        .then(basketFromServer => setBasket(basketFromServer))
    } else {
      navigate('/sign-in')
    }
  }, [])

  let total = 0
  for (let item of basket) {
    total += item.quantity * item.product.price
  }

  function removeItem (item: BasketItem) {
    // remove the item
    let basketCopy = basket.filter(target => target.id !== item.id)

    fetch(`http://localhost:4000/basket/${item.id}`, {
      method: 'DELETE'
    })

    setBasket(basketCopy)
  }

  function updateItemQuantity (item: BasketItem, newQuantity: number) {
    // update the quantity
    const basketCopy: BasketItem[] = structuredClone(basket)

    const match = basketCopy.find(target => target.id === item.id)
    if (!match) return

    match.quantity = newQuantity

    fetch(`http://localhost:4000/basket/${match.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quantity: newQuantity })
    })

    setBasket(basketCopy)
  }

  function updateOrRemoveItem (item: BasketItem, newQuantity: number) {
    if (newQuantity === 0) removeItem(item)
    else updateItemQuantity(item, newQuantity)
  }

  return (
    <section className='basket-container'>
      <h2> Welcome to your Basket</h2>
      <ul>
        {basket.map(item => (
          <BasketCard
            key={item.id}
            item={item}
            //@ts-ignore
            updateOrRemoveItem={updateOrRemoveItem}
          />
        ))}
      </ul>
      <h3>Your total: £{total.toFixed(2)}</h3>
    </section>
  )
}