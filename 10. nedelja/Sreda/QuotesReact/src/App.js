import { useEffect, useState } from 'react';
import CreateQuote from "./components/CreateQuote";
import Home from "./components/Home";
import Register from "./components/Register";
import Quotes from './components/Quotes';
import Quote from './components//Quote';
import Login from './components/Login';
import { getQuotes } from './service';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes().then(res => {
      setQuotes(res.data);
    })
  }, []);

  return (
    <Router>
      <nav>
        <Link style={{ padding: 5 }} to="/">Home</Link>
        <Link style={{ padding: 5 }} to="/quotes">Quotes</Link>
        <Link style={{ padding: 5 }} to="/createquote">CreateQuote</Link>

        {
          user ?
            <>
              <span>{user.username}</span>
              <button onClick={() => setUser(null)}>Logout</button>
            </> :
            <>
              <Link style={{ padding: 5 }} to="/login">Login</Link>
              <Link style={{ padding: 5 }} to="/register">Register</Link>
            </>
        }

      </nav>
      <Switch>
        <Route path='/login'>
          <Login setUser={setUser} />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/quotes/:id'>
          <Quote />
        </Route>
        <Route path='/quotes'>
          <Quotes quotes={quotes} user={user} />
        </Route>
        <Route path='/createquote'>
          <CreateQuote setQuotes={setQuotes} user={user}/>
        </Route>
        <Route path='/'>
          <Home isLogged={false} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
