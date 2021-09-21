import React from 'react'

function CartItem({item,handleRemove}) {
    return (
        <div className="Checkout-item" >
            <div className="Checkout-element" key={item.id}>
              <h4>{item.nombre}</h4>
              <span>$ {item.precio}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt fa-lg"></i>
            </button>
          </div>
    )
}

export default CartItem
