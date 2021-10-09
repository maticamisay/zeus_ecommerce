import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import { useHistory } from "react-router";
import { PayPalButton } from "react-paypal-button-v2";
import { getFirestore } from "../Service/getFirebase";
import "../Styles/Components/Payment.css";

function Payment() {
  const { carrito, state, addNewOrder, setState, setCarrito } =
    useContext(AppContext);
  const { buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId:
      "access_token$sandbox$9pcq5dszs24yqfnr$7eab550de5a5bbf62fd081dc6863a80f",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + parseInt(currentValue.item.price * currentValue.quantity);
    const sum = carrito.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSucces = (data) => {
    console.log(data);
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: carrito,
        payment: data,
      };
      const db = getFirestore();
      const orders = db.collection("orders");

      //controlar si hay los productos que quiero agregar
      orders
        .add(newOrder)
        .then((resp) => alert(`la orden de compra es: ${resp.id}`))
        .catch((err) => console.log(err))
        .finally(() => {
          setState([]);
          setCarrito([]);
        });
      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  };


  return (
    <div className="Payment">
      <div className="Paymen-content">
        <h3>Resumen del pedido</h3>
        {carrito.map((item) => (
          <div className="Payment-item" key={item.item.id}>
            <div className="Payment-element">
              <h4>{item.item.name}</h4>
              <span>$ {handleSumTotal()} </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log("start payment")}
            onSuccess={(data) => handlePaymentSucces(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default Payment;
