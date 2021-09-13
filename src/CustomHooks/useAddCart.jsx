import React from 'react'
import { useState } from 'react'

function useAddCart(carritoInicio, initialState) {
    //state con el que mostraremos o dejaremos de mostrar el boton de ir a comprar
    const [cartState, setCartState] = useState(initialState);
    const [carrito, setCarrito] = useState(carritoInicio);


    const GuardarCarrito = (newItem) => {
        setCarrito(newItem)
    }


    return {
        carrito,
        GuardarCarrito,
        cartState,
        setCartState,
    };
}

export default useAddCart
