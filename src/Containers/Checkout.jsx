import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import "../Styles/Containers/Cart.css";

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => () => {
      removeFromCart(product);
  }

  const handleSumTotal = () => {
      const reducer = (acumulator, currentValue) => acumulator + parseInt(currentValue.precio*currentValue.cantidad);
	  console.log(reducer);
      const sum = cart.reduce(reducer,0);
	  console.log(sum);

      return sum;
  }

  return (
    <div className="CartContainer">
      <div className="Card-Header">
        <h3 className="Card-Heading">Shopping Cart</h3>
        <h5 className="Card-Action">Remove all</h5>
      </div>

      {cart.map((product) => (
            <div className="Cart-Items" key={product.id}>
              <div className="image-box">
                <img src={product.url} alt="" className="image-cart"/>
              </div>
              <div className="about">
                <h1 className="title">{product.nombre}</h1>
                <h3 className="subtitle">Stock 5</h3>
              </div>
              <div className="counter">
                <div className="btn">+</div>
                <div className="count">{product.cantidad}</div>
                <div className="btn">-</div>
              </div>
              <div className="prices">
                <div className="amount">$ {product.precio * product.cantidad}</div>
                <div className="remove" onClick={handleRemove(product)}>
                  <u>Quitar</u>
                </div>
              </div>
            </div>
          ))}
      <hr />
      <div className="checkout">
        <div className="total">
          <div>
            <div className="Subtotal">Sub-Total</div>
            <div className="items">{cart.length} items</div>
          </div>
          <div className="total-amount">$ {handleSumTotal()}</div>
        </div>
        <button className="button">Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
