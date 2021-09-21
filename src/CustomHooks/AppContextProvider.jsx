import React from 'react'
import { useState, createContext, useContext } from 'react'

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function AppContextProvider({ children }) {
    //state con el que mostraremos o dejaremos de mostrar el boton de ir a comprar
    // const [cartState, setCartState] = useState(initialState);
    const [carrito, setCarrito] = useState([]);


    const GuardarCarrito = (newItem, cant) => {
        setCarrito([...carrito, { item: newItem, quantity: cant }])
    }

    const removeFromCart = payload => {
        setCarrito(carrito.filter(items=>items.id !== payload.id))
    }

    const borrarListado = () => {
        setCarrito([])
    }

    console.log(carrito);
    // return {
    //     carrito,
    //     GuardarCarrito,
    //     cartState,
    //     setCartState,
    // };

    return (
        <AppContext.Provider value={{
            carrito,
            GuardarCarrito,
            borrarListado,
            removeFromCart
        }}>
            {children}
        </AppContext.Provider>
    )


}

export default AppContextProvider
