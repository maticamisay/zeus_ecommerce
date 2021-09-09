import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css';

function ItemDetail( {producto} ) {
    // const { producto} = props;
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
                    <p>{producto.descripcion}</p>
                    {/* <ItemCount initial={1} stock={5} onAdd={onAdd}/> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetail
