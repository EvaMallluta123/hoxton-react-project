import { useEffect, useState } from "react"

export function Products(){
    const[products, setProducts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/products")
        .then(resp=>resp.json())
        .then(productsFromServer=> setProducts(productsFromServer))

    },[])
    return(
        {products.map(product=>( 
        <li className="product">
        {/* <Link to={`/products/${product.id}`}> */}
        <article className="product-item">
       <img src={product.image} alt={product.title} />
       <h4>{product.title}</h4>
     </article>
     {/* </Link> */}
     </li>
     ))}
    )
}