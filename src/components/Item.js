
import './Item.css'

function Item(props){
    
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
    </div>
);
}


export default Item;