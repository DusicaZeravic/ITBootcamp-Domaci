import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Categories from './components/Categories';
import { getProducts } from './service';
import Category from './components/Category';
import GlobalStyle from './components/globalStyle';
import Navbar from './components/Navbar';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res.data);
    })
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/categories/:category'>
          <Category products={products} />
        </Route>
        <Route path='/categories'>
          <Categories products={products} />
        </Route>
        <Route path='/'>
          <Home products={products} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
