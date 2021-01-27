import { useState } from 'react';

const ShoppingItem = () => {
    const [shoppingItems, setShoppingItems] = useState([
        {
            name: 'Chocolate',
            price: 100
        },
        {
            name: 'Milk',
            price: 80
        },
        {
            name: 'Bread',
            price: 60
        },
        {
            name: 'Cheese',
            price: 300
        }
    ])
    return (
        <div>
            {shoppingItems.map(item => (
                <div>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                    <hr></hr>
                </div>))}
        </div>
    )
}


export default ShoppingItem;