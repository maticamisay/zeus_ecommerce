import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import AppContext from "../Context/AppContext";
import "../Styles/Containers/Cart.css";

function Checkout() {
  const { removeFromCart, carrito } = useContext(AppContext);
  const [carritoRender, setCarritoRender] = useState(carrito);
  const [loading, setLoading] = useState(false);

  const handleRemove = (product) => {
    console.log("ejecutandose");
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + parseInt(currentValue.item.price * currentValue.quantity);
    const sum = carrito.reduce(reducer, 0);
    return sum;
  };

  useEffect(() => {
    setCarritoRender(carrito);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 20000);
  }, [carrito]);
  console.log(carrito);
  return (
    <div className="CartContainer">
      <div className="Card-Header">
        <h3 className="Card-Heading">Shopping Cart</h3>
        <h5 className="Card-Action">Remove all</h5>
      </div>
      {loading ? (
        <Skeleton count={carrito.length} height="200px" width="90%" className="Loader"/>
      ) : (
        carritoRender.map((product) => (
          <div className="Cart-Items" key={product.item.id}>
            <div className="image-box">
              <img src={product.item.url} alt="" className="image-cart" />
            </div>
            <div className="about">
              <h1 className="title">{product.item.name}</h1>
              <h3 className="subtitle">Stock {product.item.stock}</h3>
            </div>
            <div className="counter">
              <div className="count">Cantidad {product.quantity}</div>
            </div>
            <div className="prices">
              <div className="amount">
                $ {product.item.price * product.quantity}
              </div>
              <div className="remove" onClick={() => handleRemove(product)}>
                <u>Quitar</u>
              </div>
            </div>
          </div>
        ))
      )}
      <hr />
      <div className="checkout-container">
        {carrito.length > 0 && (
          <div className="checkout">
            <div className="total">
              <div>
                <div className="Subtotal">Sub-Total</div>
                <div className="items">{carrito.length} items</div>
              </div>
              <div className="total-amount">$ {handleSumTotal()}</div>
            </div>
            <Link to="/checkout/information">
              <button className="button">Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
