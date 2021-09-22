import { useEffect, useState } from "react";
import "../Styles/Components/DetailProduct.css";

function DetailProduct({ item,handleAddToCart }) {
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading
        ? "Cargando producto"
        : item.map((product) => (
            <div key={product.id}>
              <div className="card">
                <div className="card__title">
                  <div className="icon">
                    <a href="#">
                      <i className="fa fa-arrow-left"></i>
                    </a>
                  </div>
                  <h3>{product.categoria}</h3>
                </div>
                <div className="card__body">
                  <div className="half">
                    <div className="featured_text">
                      <h1>{product.nombre}</h1>
                      <p className="sub">{product.subcategoria}</p>
                      <p className="price">$ {product.precio}</p>
                    </div>
                    <div className="image">
                      <img src={product.url} alt="" />
                    </div>
                  </div>
                  <div className="half">
                    <div className="description">
                      <p>{product.descripcion}</p>
                    </div>
                    <span className="stock">
                      <i className="fa fa-pen"></i> En stock
                    </span>
                    <div className="reviews">
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star-o"></i>
                        </li>
                      </ul>
                      <span>(64 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="card__footer">
                  <div className="recommend">
                    <p>Producto recomendado por</p>
                    <h3>Zeus Ecommerce</h3>
                  </div>
                  <div className="action">
                    <button type="button" onClick={handleAddToCart(product)}>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default DetailProduct;
