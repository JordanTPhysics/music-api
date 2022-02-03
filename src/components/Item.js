
import './Item.css';
import React, { useState } from 'react';

const Item = (props) =>{
    const [desc, setDesc] = useState(props.desc);

    

    const clickHandler = () =>{
        setDesc('A new description');
        console.log(desc)
    };
    
    return(
    <div className="Item">
        <div className="Date">
        {props.date.toISOString()}
        </div>
        <div className="Description">
        {props.desc}
        </div>
        <div className="Price">
        £{props.price}
        </div>
        <button onClick={clickHandler}>Update</button>
    </div>
);
}


export default Item;