import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailProduct from "../Components/DetailProduct";
import InitialState from "../initialState";
import { useContext } from "react";
import AppContext from "../Context/AppContext";

function Detail() {
  const [prod, setProd] = useState([]);
  const { addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  const producto = new Promise((resolve) => {
    setTimeout(() => {
      resolve(InitialState.products);
    }, 1000);
  });

  const { id } = useParams();

  useEffect(() => {
    producto
      .then((resp) => setProd(resp.filter((r) => id === r.id)))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <DetailProduct item={prod} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default Detail;
