import { useState } from "react"

function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial)
    const handlerAdd = () =>{
        if(count<stock) {
            setCount(count +1)
        }
    }
    const handlerRemove = () =>{
        if(count>initial){
            setCount(count -1)
        }
    }
    const handlerOnAdd = () =>{
        onAdd(count)
        setCount(initial)
    }

    return (
        <div className="w-50 m-auto">
            <p>Producto con {stock} en stock</p>
            <div className="mb-3">
                <button className="btn" onClick={handlerAdd}>+</button>
                <label className="px-3">{count}</label>
                <button className="btn" onClick={handlerRemove}>-</button><br/>
            </div>
            <button className="btn btn-primary" onClick={handlerOnAdd}>Agregar</button>
        </div>
    )
}

export default ItemCount
