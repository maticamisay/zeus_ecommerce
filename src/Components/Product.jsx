import React from 'react'

function Product({product}) {
    return (
        <div className="Products-item">
            <img src={product.url} alt={product.nombre} />
            <div className="Product-item-info">
                <h2>{product.nombre}
                    <span>$ {product.precio}</span>
                </h2>
            </div>
            <button type="button">Detalle</button>
        </div>
    )
}

export default Product
