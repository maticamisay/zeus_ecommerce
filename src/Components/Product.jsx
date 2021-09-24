import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Components/Product.css";

function Product({ product }) {
  return (
    <Link to={`/detalle/${product.id}`}>
      <li>
        <div className="Products-item">
          <img src={product.url} className="Product-img" alt={product.name} />
          <div className="Product-overlay">
            <div className="Product-header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <div className="Product-header-text">
                <h3 className="Product-title">{product.name}</h3>
                <span>$ {product.price}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default Product;
