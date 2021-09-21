import React from "react";
import "../Styles/Components/Product.css";

function Product({ product }) {
  return (
    // <div className="Products-item">
    //   <img src={product.url} alt={product.nombre} className="Product-img" />
    //   <div className="Product-item-info">
    //     <h2>{product.nombre}</h2>
    //     <span>$ {product.precio}</span>
    //   </div>
    //   <button type="button">Detalle</button>
    // </div>
    <li>
      <a href="" class="Products-item">
        <img src={product.url} class="Product-img" alt={product.nombre} />
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <div class="card__header-text">
              <h2>{product.nombre}</h2>
              <span>$ {product.precio}</span>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}

export default Product;
