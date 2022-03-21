import React from 'react';
import "./Cosmetic.css"

const Cosmetic = (props) => {


    return (
        <div  className="product">
            <h2>{props.name}</h2>
            <p>Price: {props.price}</p>
            <h4>Buy this</h4>
            <button>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;