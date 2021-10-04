import { useContext, useEffect, useState } from "react";
import "../Styles/Containers/Home.css";
import Products from "../Components/Products";
import Modal from "../Modal/Modal";
import ContentLoader from "react-content-loader";
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
      // setState({...state, [ {id: data.id, ...itedatam.data() }]})
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
      {/* {loading ? 
      //   <ContentLoader viewBox="0 0 1024 900" height={900} width={1360}>
      //   <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
      //   <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
      //   <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
      //   <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
      //   <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
      //   <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
      //   <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
      //   <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
      //   <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
      //   <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
      //   <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
      //   <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
      //   <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
      //   <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
      //   <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
      //   <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
      //   <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
      //   <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
      //   <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
      //   <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
      //   <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
      //   <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
      //   <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
      //   <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
      //   <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
      //   <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
      //   <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
      //   <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
      //   <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
      //   <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
      // </ContentLoader>
      
      
      // : } */}
      <Products products={prods} />
    </div>
  );
}

export default Home;
