import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { ProductCard } from "../Components/ProductCard"
import { Product } from "../type"

export function CategoryItem(){
    const [products, setProducts] = useState<Product[]>([])
  const params = useParams()
useEffect(()=>{
fetch(`http://localhost:4000/products?categoryId=${params.id}`)
.then(resp=>resp.json())
.then(productsFromServer => setProducts(productsFromServer) )
  },[])
    return(
<section>
        <ul className="products-ul">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    )
}