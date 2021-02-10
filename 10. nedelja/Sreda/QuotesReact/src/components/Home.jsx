import { Redirect } from "react-router-dom";

const Home = ({ isLogged }) => {
    return (
        <div>
            <h1>Home Page</h1>
            {
                isLogged ?
                    <Redirect to='/quotes' /> :
                    <Redirect to='/login' />
            }
        </div>
    )
}

export default Home
