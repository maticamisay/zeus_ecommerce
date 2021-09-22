import { useEffect, useState } from "react";
import "../Styles/Containers/Home.css";
import Products from "../Components/Products";
import { useParams } from "react-router";
import initialState from '../initialState'

function Home() {
  const [prods, setProds] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    let productos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(initialState.products);
      }, 1000);
    });
    if (category === undefined) {
      productos.then((resp) => setProds(resp)); //guardar en el estado
    } else {
      productos.then((resp) =>
      setProds(resp.filter((r) => category === r.categoria))
      );
    }
  }, [category]);

  return (
    <div id="container">
      <h1>Bienvenidos a Zeus Ecommerce</h1>
      <Products products={prods} />
    </div>
  );
}

export default Home;
