import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUsers } from '../service';
import { Link } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                getUsers().then(res => {
                    let user = res.data.find(el => el.username === username && el.password === password); // vraca undefined ako ga ne pronadje
                    if (user) {
                        setUser(user);
                        history.push('/quotes');
                    } else {
                        console.warn('Invalid data!');
                    }
                })
            }}>
                <div>
                    <input type='text' placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <input type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type='submit' value='Login' />
                </div>
                <Link to='/register'>Sign up if you don't have an account yet.</Link>
            </form>
        </div>
    )
}

export default Login
