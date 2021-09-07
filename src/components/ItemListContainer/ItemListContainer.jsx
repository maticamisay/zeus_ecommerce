import axios from "axios";
import React, {useState, useEffect} from 'react';
import ItemList from "./Item/ItemList";

function ItemListContainer({greeting}) {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchApi = async ()=>{
        await axios.get('https://cruce-app.herokuapp.com/products')
        .then(response => {
            setTimeout(() => {
                setTodos(response.data);
                setLoading(false);
            }, 2000);
        }).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetchApi();
    }, [])

    

    return (
        <React.Fragment>
            <p>{greeting}</p>
            
            <div className='f'>
                <div className='container'>
                    <div className='row'>
                        {loading ? (
                            'cargando'
                        ) : (
                        <ItemList todos={todos}/>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemListContainer
