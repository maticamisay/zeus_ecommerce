import { useState } from "react";
import initialState from "../initialState";

function useInitialState() {
  const [carrito, setCarrito] = useState([]);
  const [state, setState] = useState(initialState);

  const addToCart = (item, quantity) => {
    const index = carrito.findIndex((i) => i.item.id === item.id);

    if (index > -1) {
      const oldQy = carrito[index].quantity;
      carrito.splice(index, 1);
      setCarrito([...carrito, { item, quantity: quantity + oldQy }]);
    } else {
      setCarrito([...carrito, { item, quantity }]);
    }
  };

  const removeFromCart = (payload) => {
    const index = carrito.findIndex((i) => i.item.id === payload.item.id);
    console.log(payload);
    console.log(index);
    if (index > -1) {
      carrito.splice(index, 1);
      setCarrito(carrito);
    }
    const newOrder = {
      ...state,
      product: carrito,
    };
    setState({ newOrder });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  return {
    carrito,
    addToCart,
    setCarrito,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
    setState,
  };
}

export default useInitialState;
