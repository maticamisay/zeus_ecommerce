import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailProduct from "../Components/DetailProduct";
import { getFirestore } from "../Service/getFirebase";

function Detail() {
  const [prod, setProd] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const queryDB = db.collection("items");
    const item = queryDB.doc(id);
    item.get().then((doc) => {
      setProd({ id: doc.id, ...doc.data() });
    });
  }, [id]);

  return (
    <div>
      <DetailProduct item={prod} />
    </div>
  );
}

export default Detail;
