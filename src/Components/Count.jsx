import React from 'react'

function Count() {
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
        <div>
            
        </div>
    )
}

export default Count
