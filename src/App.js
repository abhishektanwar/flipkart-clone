import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import ProductList from './components/ProductList/ProductList';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header'
const App = () => {
  const [sortPrice, setSortPrice] = useState('Low to High');
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [size, setSize] = useState('All');

  return (
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
        />
      </AppBody>
  );
};

export default App;

const AppBody = styled.div`
  display:flex;
  /* height: 100vh; */
  background-color: #afaeae;
`;