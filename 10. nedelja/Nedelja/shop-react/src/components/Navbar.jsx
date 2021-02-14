import { Link } from 'react-router-dom';
import StyledNavbar from './StyledNavbar';

const Navbar = () => {
    return (
        <StyledNavbar>
            <Link to='/'><li>Home</li></Link>
            <Link to='/categories'><li>Categories</li></Link>
        </StyledNavbar>
    )
}

export default Navbar
