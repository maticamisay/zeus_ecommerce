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


    // if (state.cart.some((prod) => prod.id === payload.id)) {
    //   const producto = state.cart.map((prod) => {
    //     if (prod.id === payload.id) {
    //       console.log('cantidad del carrito'+prod.cant);

    //       console.log('cantidad a añadir'+payload.cant);
    //       prod.cant=prod.cant+payload.cant;
    //       return prod;
    //     } else {
    //       return prod;
    //     }
    //   });
    //   state.cart = [...producto];
    // } else {
    //   setState({
    //     ...state,
    //     cart: [...state.cart, payload],
    //   });
    //   console.log(state);
    // }
  };

  // const addToCart = (item, quantity) => {
  //   const index = state.cart.findIndex((i) => i.item.id === item.id);

  //   if (index > -1) {
  //     const oldQy = state.cart[index].quantity;

  //     state.cart.splice(index, 1);
  //     setState([...state, { item, quantity: quantity + oldQy }]);
  //   } else {
  //     setState([...state, { item, quantity }]);
  //   }
  // };

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
    carrito,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
    setState,

  };
}

export default useInitialState;
