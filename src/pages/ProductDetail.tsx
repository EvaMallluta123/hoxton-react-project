import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Product } from "../type"
type Props = {
    addItemToBasket: (item: Product) => void
  }

export function ProductDetail ({addItemToBasket}:Props){
    const[product, setProduct]=useState<Product | null>(null)
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:4000/products/${params.id}`)
        .then(resp=>resp.json())
        .then(productFromServer=>setProduct(productFromServer))
    }, [])
    if (product === null) return <h2>Loading...</h2>
    return(
        <>

        <section className="product-detail">
        <img src={`../${product.image}`} alt={product.title} width="300"/>
        <div className="product-detail-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p> Çmimi: {product.price} lekë</p>
          <button onClick={() => {
            addItemToBasket(product)
          }}>
            Add to basket</button>
        </div>
    
       </section>
       </>
    )
}