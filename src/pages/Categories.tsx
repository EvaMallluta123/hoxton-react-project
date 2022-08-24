import { useState, useEffect } from "react"
import { Category } from "../type"

export function Categories(){
    const[categories, setCategories]=useState<Category[]>([])
useEffect(()=>{
fetch("http://localhost:4000/categories")
.then(resp=>resp.json())
.then(categoriesFromServer=>setCategories(categoriesFromServer))
},[])
    return(
        <section className="categories">
        <ul className="categories--list">
          {categories.map(categori=>(
          <li>
          {categori.name}
          </li>
          ))}
        </ul>
      </section>
    )
}