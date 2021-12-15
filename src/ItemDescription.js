import React, {useState} from 'react'

function ItemDescription({name, description}) {
    const [value, setValue] = useState(0);

    function increment() {
        setValue(value+1);
    }
    function decrement() {
        if (value>0){
            setValue(value-1);
        }    
    }

    return (
        <div>
            <h2>{name}</h2>
            {/* <p>{description}</p> */}
            <p>{value}</p>
            <button onClick={decrement} >-</button>
            <button onClick={increment} >+</button>
        </div>
    )
}

export default ItemDescription
