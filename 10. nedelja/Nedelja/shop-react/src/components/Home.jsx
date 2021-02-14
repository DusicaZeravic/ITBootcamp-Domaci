import StyledHome from "./StyledHome"

const Home = ({ products }) => {
    return (
        <StyledHome>
            {products.map(product => <p key={product.id}>{product.name} --- <strong>{product.category}</strong></p>)}
        </StyledHome>
    )
}

export default Home
