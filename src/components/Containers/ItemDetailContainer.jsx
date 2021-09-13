import { useState, useEffect } from "react";
import ItemDetail from "../Item/ItemDetail";
import axios from "axios";

//codigo js

function ItemDetailContainer() {
    //codigo js
    const [ producto, setProducto ] = useState({});
    const [loading, setloading] = useState(true);
    const fetchApi = async ()=>{
        await axios.get('https://maticamisay.github.io/base-de-datos/base-de-datos.json')
        .then(response => {
            setTimeout(() => {
                setProducto(response.data[1]);
                setloading(false);
            }, 2000);
        }).catch(error => {
            console.log(error);
        });
    };
    useEffect(() => {
        fetchApi();
    }, [])


    return (
        <>
            {loading ? 
                    <h2>Cargando Productos...</h2>
                : 
                    <ItemDetail producto={producto}  />
            }
        </>
    )
}

export default ItemDetailContainer
