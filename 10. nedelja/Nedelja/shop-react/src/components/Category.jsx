import { useParams } from 'react-router-dom';
import StyledCategory from './StyledCategory';

const Category = ({ products }) => {
    let { category } = useParams();

    let filteredArr = products.filter(product => product.category === category);

    return (
        <StyledCategory>
            {filteredArr.map(el => 
                filteredArr.length > 1 ? <p key={el.id}>{el.name} --- {el.category}</p> : <em key={el.id}><p>{el.name} --- {el.category}</p></em>
            
            )}
        </StyledCategory>
    )
}

export default Category
