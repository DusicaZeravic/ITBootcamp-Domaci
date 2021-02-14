import styled from 'styled-components';

const StyledNavbar = styled.nav`
        border-bottom: 2px solid grey;
        height: 70px;
        display: flex;
        justify-content: space-around;

    li {
        line-height: 70px;
        font-size: 20px;
        text-transform: uppercase;
        list-style-type: none;
        color: #801b1b;
    }

    a {
        transition: transform 0.5s;
    }

    a:hover, a:visited, a:link, a:active {
        text-decoration: none;
    }

    a:hover {
        transform: scale(1.1);
    }
`

export default StyledNavbar;