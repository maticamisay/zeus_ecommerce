import { useEffect, useState } from "react";
import "../Styles/Components/DetailProduct.css";
import ItemCounter from "../Components/ItemCounter";

function DetailProduct({ item, handleAddToCart }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {
        loading ? (
          "Cargando producto"
        ) : (
          <div key={item.id}>
            <div className="card">
              <div className="card__title">
                <div className="icon">
                  {/* <a href="#"> */}
                  <i className="fa fa-arrow-left"></i>
                  {/* </a> */}
                </div>
                <h3>{item.category}</h3>
              </div>
              <div className="card__body">
                <div className="half">
                  <div className="featured_text">
                    <h1>{item.name}</h1>
                    <p className="sub">{item.subcategory}</p>
                    <p className="price">$ {item.price}</p>
                  </div>
                  <div className="image">
                    <img src={item.url} alt="" />
                  </div>
                </div>
                <div className="half">
                  <div className="description">
                    <p>{item.descripcion}</p>
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
                <ItemCounter item={item} handleAddToCart={handleAddToCart}/>
                
              </div>
            </div>
          </div>
        )
        // ))
      }
    </div>
  );
}

export default DetailProduct;
