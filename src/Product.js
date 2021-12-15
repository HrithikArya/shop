import React, { useState } from 'react';
import ItemDescription from './ItemDescription';
import styles from './product.module.css';
function Product(props) {
    const [value, setValue] = useState(0);
    const [totalProd, setTotalProd] = useState(0);

    function increment() {
        setValue(value+1);
        setTotalProd(totalProd + (props.price));
        // console.log(totalProd, props.price);

    }
    function decrement() {
        if (value>0){
            setValue(value-1);
            // console.log(totalProd);
            setTotalProd((totalProd - (props.price)));
            // console.log(totalProd, props.price);

        }    
    }
    return (
        <div className={styles.product}>
            <img className={styles.product_image} src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <h4>₹{props.price}</h4>
            <p className={styles.desc}>{props.description}</p>

            <p>{value}</p>
            <button onClick={decrement} >-</button>
            <button onClick={increment} >+</button>
            <p>total for the product: {totalProd}</p>
        </div>
    )
};

export default Product;


