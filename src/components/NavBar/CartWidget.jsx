import "./CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <>
      <Link to="/cart">
        <img
          src="https://indyme.com/wp-content/uploads/2020/11/shopping-cart-icon.png"
          alt="imagen carrito"
        />
      </Link>
    </>
  );
}

export default CartWidget;
