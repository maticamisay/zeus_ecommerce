import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Context/AppContext";
import "../Styles/Components/Header.css";

function Header() {
  const { carrito } = useContext(AppContext);
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="Header topnav" id="myTopnav">
      <Link to="/" className="active">
        Zeus Ecommerce
      </Link>
      <Link to="/categoria/impresion">Impresión</Link>
      <Link to="/categoria/computacion">Computación</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/checkout" className="Header-checkout">
        <i className="fas fa-shopping-cart fa-2x" />
        {carrito.length > 0 && (
          // <div className="Header-alert">
            carrito.length
          // {/* </div> */}
        )}
      </Link>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        &#9776;
      </a>
    </div>
  );
}

export default Header;
