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
    const index = carrito.findIndex((i) => i.item.id === item.id);
    console.log(index);
    if ((index!==-1) && (carrito[index].quantity >= carrito[index].item.stock)) {
      console.log("se llego al maximo");
      setDisabledButton(true);
    }
  }, [carrito]);

  const handlerAdd = () => {
    if (counter < item.stock) {
      setCounter(counter + 1);
    }
  };

  // const handlerAddCart = () => {
  //   setProd({ ...prod, cant: (prod.cant+counter) });
  //   addToCart(prod);
  // };

  const handlerRemove = () => {
    // if (item.cant > 1) {
    //   setProd({ ...item, cant: item.cant - 1 });
    // }
  };

  // const btn = () => {
  //   if (prod.stock <= 0) {
  //     setDisabledButton(true);
  //     console.log(disabledButton);
  //   }
  // };
  // console.log(prod);
  // console.log(cart);
  console.log(carrito);
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
      <p>{item.cant}</p>
    </>
  );
}

export default ItemCounter;
