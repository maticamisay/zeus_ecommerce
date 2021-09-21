import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css';
import ItemCount from './ItemCount';
import { useAppContext } from '../../CustomHooks/AppContextProvider';
import ButtonCart from '../Buttons/ButtonCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ItemDetail({ producto }) {

    const [cartState, setCartState] = useState(false);
    const { GuardarCarrito } = useAppContext();

    const onAdd = (count) => {
        alert(`Agregar al carrito la cantidad ${count} del item ${producto.id}`);
        setCartState(prevState => !prevState);


        GuardarCarrito(producto, count);
    }
    return (
        <React.Fragment>
            <div
                data-aos='fade-up'
                className='col-12 col-md-6 col-lg-4 col-xl-3'
            >
                <div className='card-ecommerce'>
                    <i className="icon-favorites-card far fa-heart" />
                    <img className="img-item" src={producto.url} alt="" />
                    <h2 className="name">{producto.nombre}</h2>
                    <h2 className="price">${producto.precio}</h2>
                    <h2 className="price">Id {producto.id}</h2>
                    <p>{producto.descripcion}</p>
                    {
                        cartState ?
                            <Link to="/carrito">
                                <ButtonCart initial={1} stock={5} onAdd={onAdd} />
                            </Link>

                            :
                            (<ItemCount initial={1} stock={5} onAdd={onAdd} />)
                    }

                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetail
