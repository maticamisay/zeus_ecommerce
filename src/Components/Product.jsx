import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Components/Product.css";

function Product({ product }) {
  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <Link to={`/detalle/${product.id}`}>
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src={product.url} alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{product.name}</span>
                    <span className="p-company">{product.subcategory}</span>
                  </div>
                  <div className="a-size">
                    Stock : <span className="size">{product.stock}</span>
                  </div>
                </div>
              </div>

              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <div className="cart">
                  <span className="price">${product.price}</span>
                  <span className="add-to-cart">
                    <span className="txt">Detalle</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
