import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailProduct from "../Components/DetailProduct";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { getFirestore } from "../Service/getFirebase";

function Detail() {
  const [prod, setProd] = useState([]);
  const { addToCart } = useContext(AppContext);

  // const handleAddToCart = (product) => () => {
  //   addToCart(product);
  // };

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDB = db.collection("items");
    const item = queryDB.doc(id);

    item.get().then((doc) => {
      setProd({ id: doc.id, ...doc.data() });
    });
  }, []);

  return (
    <div>
      <DetailProduct item={prod}  />
    </div>
  );
}

export default Detail;
