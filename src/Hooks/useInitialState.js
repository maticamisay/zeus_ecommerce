import { useState } from "react";
import initialState from "../initialState";

function useInitialState() {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    if (state.cart.some((prod) => prod.id === payload.id)) {
      const producto = state.cart.map((prod) => {
        if (prod.id === payload.id) {
          prod.cant++;
          return prod;
        } else {
          return prod;
        }
      });
      state.cart = [...producto];
    } else {
      setState({
        ...state,
        cart: [...state.cart, payload],
      });
    }
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
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
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
    setState,
  };
}

export default useInitialState;
