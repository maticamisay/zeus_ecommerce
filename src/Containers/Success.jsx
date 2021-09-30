import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';

function Success() {
  const { state } =
  useContext(AppContext);

    console.log(state);
    return (
        <div>
            <button type="button" > hola</button>
        </div>
    )
}

export default Success
