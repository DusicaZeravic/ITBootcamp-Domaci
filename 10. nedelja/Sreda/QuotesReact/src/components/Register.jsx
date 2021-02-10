import { useState, useEffect } from 'react';
import { getUsers, postUser } from '../service';
import { v4 as uuidv4 } from 'uuid';

const Register = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        getUsers().then(res => {
            setUsers(res.data);
        })
    }, []);

    let emailRegEx = /\S+@\S+\.\S+/;
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const isValid = () => {
        if (username.length < 4) {
            console.warn('Username must have at least 4 characters!');
        } else if (!email.match(emailRegEx)) {
            console.warn('Email must have to be entered in the following format: something@something.something!')
        } else if (!password.match(passwordRegEx)) {
            console.warn('Password must have at least 8 characters, at least one number and one letter!')
        } else {
            console.log('is valid');
            return true;
        }
    }

    const isUnique = () => {
        users.forEach(user => {
            if (user.username === username) {
                console.warn('User with that username already exists!')
            } else if (user.email === email) {
                console.warn('User with that email already exists!')
            } else {
                console.log('is unique');
                return true;
            }
        })
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (isValid() || isUnique()) {
                    let user = {
                        id: uuidv4(),
                        username: username,
                        email: email,
                        password: password
                    }

                    postUser(user).then(() => {
                        setUsers(prev => [...prev, user]);
                    });

                    setUsername('');
                    setEmail('');
                    setPassword('');
                }
            }}>
                <div>
                    <input value={username} type='text' placeholder='Username' required onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <input value={email} type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input value={password} type='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type='submit' value='Sign up' />
                </div>
            </form>
        </div>
    )
}


export default Register
