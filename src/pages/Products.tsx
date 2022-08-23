import { useState , useEffect} from "react"
import { ProductCard } from '../Components/ProductCard'
import { Product } from "../type"

export function Products (){
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        fetch('http://localhost:4000/products')
          .then(resp => resp.json())
          .then(productsFromServer => setProducts(productsFromServer))
      }, [])
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