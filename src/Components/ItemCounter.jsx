import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import "../Styles/Components/ItemCounter.css";

function ItemCounter({ item }) {
  const [disabledButton, setDisabledButton] = useState(false);
  const [counter, setCounter] = useState(1);

  const { addToCart, carrito } = useContext(AppContext);

  const handleAddToCart = (product, counter) => {
    addToCart(product, counter);
  };

  useEffect(() => {
    setCounter(1);
    const maximo = () => {
      const index = carrito.findIndex((i) => i.item.id === item.id);
      if (
        index !== -1 &&
        carrito[index].quantity >= carrito[index].item.stock
      ) {
        console.log("se llego al maximo");
        setDisabledButton(true);
      }
    };
    maximo();
  }, [item,carrito]);

  const handlerAdd = () => {
    const index = carrito.findIndex((i) => i.item.id === item.id);
    if (index !== -1) {
      if (
        carrito[index].quantity < carrito[index].item.stock &&
        counter + carrito[index].quantity < carrito[index].item.stock
      ) {
        setCounter(counter + 1);
      }
    } else if (counter < item.stock) {
      setCounter(counter + 1);
    }
  };

  const handlerRemove = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="counter">
        <div className="btn" onClick={handlerAdd}>
          +
        </div>
        <div className="count">{counter}</div>
        <div className="btn" onClick={handlerRemove}>
          -
        </div>
      </div>
      <div className="action">
        <button
          type="button"
          onClick={() => handleAddToCart(item, counter)}
          className={`${disabledButton ? "disabledButton" : ""}`}
          disabled={disabledButton}
        >
          Añadir al carrito
        </button>
      </div>
    </>
  );
}

export default ItemCounter;
