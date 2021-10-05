import { useContext, useEffect, useState } from "react";
import "../Styles/Containers/Home.css";
import Products from "../Components/Products";
import Modal from "../Modal/Modal";
import { useParams } from "react-router";
import { getFirestore } from "../Service/getFirebase";
import AppContext from "../Context/AppContext";
import ReactLoading from "react-loading";

function Home() {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    const db = getFirestore();
    const queryDB = db.collection("items");

    queryDB.get().then((data) => {
      setProds(data.docs.map((item) => ({ id: item.id, ...item.data() })));
    });
    setState({
      ...state,
      products: [...prods],
    });

    const conditionQuery = category
      ? queryDB.where("category", "==", category)
      : queryDB;

    conditionQuery.get().then((data) => {
      if (data.size === 0) {
        console.log("no hay nada");
      }
      setProds(data.docs.map((item) => ({ id: item.id, ...item.data() })));
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [category]);

  return (
    <div id="container">
      <h1>Bienvenidos a Zeus Ecommerce</h1>
      {!!loading && (
        <Modal>
          <ReactLoading type="spokes" color="#3E78B2" className="content" />
        </Modal>
      )}
      <Products products={prods} />
    </div>
  );
}

export default Home;
