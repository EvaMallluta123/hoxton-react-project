import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { ProductCard } from "../Components/ProductCard"
import { Category, Product } from "../type"
import { Products } from "./Products"

export function CategoryItem(){
    const [category, setProducts] = useState([])
        const params = useParams()
useEffect(()=>{
// fetch(`http://localhost:4000/products?categoryId=${params.id}`)
fetch(`http://localhost:4000/categories/${params.id}`)
.then(resp=>resp.json())
.then(productsFromServer => setProducts(productsFromServer) )
  },[])
  console.log(category)
    return(
<section>
        <ul className="products-ul">
          {
           category.products.map((product:Product)=>(
            <ProductCard key={product.id} product={product} />
          ))} 
        </ul>
      </section>
    )
}