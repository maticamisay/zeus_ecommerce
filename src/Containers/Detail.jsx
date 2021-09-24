import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailProduct from "../Components/DetailProduct";
import InitialState from "../initialState";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { getFirestore } from "../Service/getFirebase";

function Detail() {
  const [prod, setProd] = useState([]);
  const { addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDB = db.collection("items");
    console.log(db);
    const conditionQuery = id ? queryDB.where("id", "==", id) : queryDB;

    conditionQuery.get().then((data) => {
      if (data.size === 0) {
        console.log("no hay nada");
        console.log(data);
      }
      setProd(data.docs.map((item) => ({ id: item.id, ...item.data() })));
      console.log(id);
    });

    // const producto = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(InitialState.products);
    //   }, 1000);
    // });

    // producto
    //   .then((resp) => setProd(resp.filter((r) => id === r.id)))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div>
      <DetailProduct item={prod} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default Detail;
