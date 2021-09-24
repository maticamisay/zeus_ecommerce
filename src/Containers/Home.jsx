import { useEffect, useState } from "react";
import "../Styles/Containers/Home.css";
import Products from "../Components/Products";
import { useParams } from "react-router";
// import initialState from "../initialState";
import { getFirestore } from "../Service/getFirebase";

function Home() {
  const [prods, setProds] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDB = db.collection("items");

    const conditionQuery = category
      ? queryDB.where("category", "==", category)
      : queryDB;
    console.log(queryDB);

    conditionQuery.get().then((data) => {
      if (data.size === 0) {
        console.log("no hay nada");
      }
      setProds(data.docs.map((item) => ({ id: item.id, ...item.data() })));
      console.log(category);
    });

    // let productos = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(initialState.products);
    //   }, 1000);
    // });
    // if (category === undefined) {
    //   productos.then((resp) => setProds(resp)); //guardar en el estado
    // } else {
    //   productos.then((resp) =>
    //     setProds(resp.filter((r) => category === r.categoria))
    //   );
    // }
  }, [category]);
  console.log(prods);
  return (
    <div id="container">
      <h1>Bienvenidos a Zeus Ecommerce</h1>
      <Products products={prods} />
    </div>
  );
}

export default Home;
