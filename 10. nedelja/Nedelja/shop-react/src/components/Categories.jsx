import { Link } from 'react-router-dom';
import StyledCategories from './StyledCategories';

const Categories = ({ products }) => {

    let categories = Array.from(new Set(products.map(product => product.category)));
    
    return (
        <>
            {
                categories.map(category => {
                    return (
                        <StyledCategories key={category}>
                            <Link to={`/categories/${category}`}>{category}</Link>
                        </StyledCategories>
                    )
                })
            }
        </>
    )



}

export default Categories
