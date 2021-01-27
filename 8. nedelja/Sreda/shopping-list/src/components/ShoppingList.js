import ShoppingItem from './ShoppingItem';

const ShoppingList = ({ime}) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Shopping List for {ime}</h1>
            <ShoppingItem />
        </div>
    )
}

export default ShoppingList;
