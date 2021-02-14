import styled from 'styled-components';

const StyledCategories = styled.div`
        display: inline-block;
        margin: 50px auto;

    a {
        padding: 20px 50px;
        width: 300px;
        height: 200px;
        margin: 40px 40px;
        color: #3b3a3a;
        font-size: 20px;
        box-shadow: 4px 6px 9px -1px rgba(0,0,0,0.87);
    }

    a:hover, a:visited, a:link, a:active {
        text-decoration: none;
    }
`

export default StyledCategories