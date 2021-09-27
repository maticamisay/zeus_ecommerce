import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import "../Styles/Components/ItemCounter.css";

function ItemCounter({ item }) {
  const [prod, setProd] = useState(item);
  // const [disabledButton, setDisabledButton] = useState(false);
  const [counter, setCounter] = useState(1);

  const { state,addToCart } = useContext(AppContext);
  const { cart } = state;

  const handleAddToCart = (product,counter) => () => {
    addToCart(product,counter);
  };

  useEffect(() => {
    if (cart.some((product) => product.id === item.id)) {
      cart.map((product) => {
        setProd({ ...prod, stock: prod.stock - product.cant });
      });
    }
    // btn();
    setCounter(1);
  }, [cart]);

  const handlerAdd = () => {
    if (counter <= prod.stock) {
      setCounter(counter + 1);
    }
  };

  // const handlerAddCart = () => {
  //   setProd({ ...prod, cant: (prod.cant+counter) });
  //   addToCart(prod);
  // };

  const handlerRemove = () => {
    if (prod.cant > 1) {
      setProd({ ...prod, cant: prod.cant - 1 });
    }
  };

  // const btn = () => {
  //   if (prod.stock <= 0) {
  //     setDisabledButton(true);
  //     console.log(disabledButton);
  //   }
  // };
  // console.log(prod);
  // console.log(cart);
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
          onClick={handleAddToCart(item,counter)}
          // className={`${disabledButton ? "disabledButton" : "h"}`}
        >
          Añadir al carrito
        </button>
      </div>
      <p>{prod.cant}</p>
    </>
  );
}

export default ItemCounter;
