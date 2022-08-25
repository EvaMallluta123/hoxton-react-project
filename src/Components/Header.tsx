import { Link } from "react-router-dom";

export function Header({signOut}){
    return(
        <header className="header">
        <h2 className="header-logo">e-ShopiAl</h2>
        <nav className="header-nav">
          <ul>
            <li >
              <Link to="products" className="header-nav-li"> Products</Link>
            </li>
            <li>
              <Link to="categories" className="header-nav-li"> Categories</Link>
            </li>
            <li>
              <Link to="basket" className="header-nav-li">Basket</Link>
            </li>
            <li>
              <Link to="sing-in" className="header-nav-li"> Sing-In</Link>
            </li>
            <li>
              <button onClick={()=>{
               signOut ()
              }}>Sign Out</button>
            </li>
          </ul>
        </nav>
      </header>
    )
}