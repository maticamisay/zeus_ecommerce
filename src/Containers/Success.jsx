import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';

function Success() {
  const { state } =
  useContext(AppContext);

    console.log(state);
    return (
        <div>
            <h1>Pago exitoso</h1>
        </div>
    )
}

export default Success
