import { Link } from "react-router-dom";
import { Product } from "../type";
type Props={
    product :Product
}
export function ProductCard({product} :Props){
    return(
        <li className="product">
        {/* <Link to={`/products/${product.id}`}> */}
        <article className="product-item">
       <img src={product.image} alt={product.title}  width="130"/>
       <h4>{product.title}</h4>
     </article>
     {/* </Link> */}
     </li>
    )
}