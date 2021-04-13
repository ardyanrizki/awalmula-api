import { Switch, Route } from 'react-router-dom'
import './App.css';
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/product-detail/:id">
          <Detail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <AllProducts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
