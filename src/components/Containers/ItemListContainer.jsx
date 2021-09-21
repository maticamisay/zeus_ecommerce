import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import { tarea } from "../../utils/promesas";
import ItemList from "../Item/ItemList";
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {

        if(category===undefined){
            tarea
            .then((resp)=> 
                setTodos(resp),
                setLoading(false)
            )    //guardar en el estado
         }else{
            tarea
            .then((resp)=> 
                setTodos(resp.filter( r => category===r.categoria)),
                setLoading(false)
            ) 
        }
    }, [category])

    //  console.log(todos);


    return (
        <React.Fragment>
            <p className="ItemList-title">{greeting}</p>
            
            <div className='ItemList-container'>
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
