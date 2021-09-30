import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Context/AppContext";
import "../Styles/Components/Header.css";

function Header() {
  const { carrito } = useContext(AppContext);
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Zeus Ecommerce</Link>
      </h1>
      <div>
        <Link to="/categoria/impresion">Impresion</Link>
      </div>
      <div>Contacto</div>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-cart fa-2x" />
        </Link>
        {carrito.length > 0 && <div className="Header-alert">{carrito.length}</div>}
      </div>
    </div>
  );
}

export default Header;
