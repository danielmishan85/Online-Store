import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const sendRequest = () => {
    fetch('http://localhost:5000/api')
      .then((res) => (res.ok ? res.json() : { products: '' }))
      .then((data) => {
        setProducts(data.products);
      });
  };
  useEffect(() => {
    sendRequest();
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div className='App'>
              <Header countCartItems={cartItems.length}></Header>

              <div className='row'>
                <Main products={products} onAdd={onAdd}></Main>
                <Basket
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                ></Basket>
              </div>
            </div>
          }
        />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
