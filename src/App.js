import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import ProductList from './components/ProductList/ProductList';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Cart from './components/Cart';
const App = () => {
  const [sortPrice, setSortPrice] = useState('Low to High');
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [size, setSize] = useState('All');
  const [productIdInCart,setProductIdInCart] = useState([1,2,4]);
  const [cart,setCart] = useState([]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AppBody>
          <Header />
          <Sidebar
            sortPrice={sortPrice}
            setSortPrice={setSortPrice}
            category={category}
            setCategory={setCategory}
            brand={brand}
            setBrand={setBrand}
            size={size}
            setSize={setSize}
          />
          <ProductList
            sortPrice={sortPrice}
            category={category}
            brand={brand}
            size={size}
            cart={cart}
            setCart={setCart}
          />
          </AppBody>
        </Route>
        <Route path="/cart">
          {console.log("cartt",cart)}
          <Cart productIdInCart={cart} setProductIdInCart={setProductIdInCart} />
        </Route>
      
      </Switch>
    </Router>
      
  );
};

export default App;

const AppBody = styled.div`
  display:flex;
  /* height: 100vh; */
  background-color: #afaeae;
`;