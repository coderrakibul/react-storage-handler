import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

// import add from '../utilities/calculate';

const Cosmetics = () => {
    const cosmetics = [
        {id:1, name:"alta", price: 100},
        {id:2, name:"lipstick", price: 200},
        {id:3, name:"ring", price: 300},
        {id:4, name:"ear ring", price: 400},
        {id:5, name:"chain", price: 500},
    ]
    return (
        <div>
            <h1>welcome to my cosmetic store</h1>
           {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} price={cosmetic.price} name={cosmetic.name}></Cosmetic>)
           }
        </div>
    );
};

export default Cosmetics;