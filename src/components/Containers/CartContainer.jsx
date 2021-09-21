import React from "react";
import { useAppContext } from "../../CustomHooks/AppContextProvider";
import CartItem from "../Item/CartItem";

function CartContainer() {
  const { GuardarCarrito, removeFromCart, carrito } = useAppContext();

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = carrito.reduce(reducer, 0);

    return sum;
  };

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {carrito.length > 0 ? (
          <h3>Lista de Pedidos:</h3>
        ) : (
          <h3>Sin pedidos...</h3>
        )}
        {carrito.map((item) => (
          <CartItem key={item.id} item={item} handleRemove={handleRemove} />
        ))}
        {}
      </div>
      {carrito.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
          <button type="button">Continuar pedido</button>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
