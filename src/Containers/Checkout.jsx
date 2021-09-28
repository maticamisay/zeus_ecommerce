import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import "../Styles/Containers/Cart.css";

function Checkout() {
  const { state, removeFromCart,carrito } = useContext(AppContext);
  // const { cart } = state;

  const handleRemove = product => () => {
      removeFromCart(product);
  }

  const handleSumTotal = () => {
      const reducer = (acumulator, currentValue) => acumulator + parseInt(currentValue.item.price*currentValue.quantity);
      const sum = carrito.reduce(reducer,0);
      return sum;
  }

  return (
    <div className="CartContainer">
      <div className="Card-Header">
        <h3 className="Card-Heading">Shopping Cart</h3>
        <h5 className="Card-Action">Remove all</h5>
      </div>

      {carrito.map((product) => (
            <div className="Cart-Items" key={product.item.id}>
              <div className="image-box">
                <img src={product.item.url} alt="" className="image-cart"/>
              </div>
              <div className="about">
                <h1 className="title">{product.item.name}</h1>
                <h3 className="subtitle">Stock {product.item.stock}</h3>
              </div>
              <div className="counter">
                <div className="btn">+</div>
                <div className="count">{product.quantity}</div>
                <div className="btn">-</div>
              </div>
              <div className="prices">
                <div className="amount">$ {product.item.price * product.quantity}</div>
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
            <div className="items">{carrito.length} items</div>
          </div>
          <div className="total-amount">$ {handleSumTotal()}</div>
        </div>
        <button className="button">Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
