import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import "../Styles/Components/ItemCounter.css";

function ItemCounter({ item, handleAddToCart }) {
  const [prod, setProd] = useState(item);
  const [disabledButton, setDisabledButton] = useState(false);

  const { state } = useContext(AppContext);
  const { cart } = state;

  useEffect(() => {
    if (cart.some((product) => product.id === item.id)) {
      cart.map((product) => {
        setProd({ ...prod, stock: prod.stock - product.cant });
      });
      
    }
    btn();
  }, [cart]);

  const handlerAdd = () => {
    if (prod.cant < prod.stock) {
      setProd({ ...prod, cant: prod.cant + 1 });
    }
  };

  const handlerRemove = () => {
    if (prod.cant > 1) {
      setProd({ ...prod, cant: prod.cant - 1 });
    }
  };
  
const btn = () =>{
    if (prod.stock <= 0) {
        setDisabledButton(true);
        console.log(disabledButton);
      }
  }

  return (
    <>
      <div className="counter">
        <div className="btn" onClick={handlerAdd}>
          +
        </div>
        <div className="count">{prod.cant}</div>
        <div className="btn" onClick={handlerRemove}>
          -
        </div>
      </div>
      <div className="action">
        <button
          type="button"
          onClick={handleAddToCart(prod)}
          className={`${disabledButton ? "disabledButton" : "h"}`}
        >
          Añadir al carrito
        </button>
      </div>
    </>
  );
}

export default ItemCounter;
