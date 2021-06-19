import { InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

import { Row, Col, Form, Button, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Sidebar = ({
  sortPrice,
  setSortPrice,
  category,
  setCategory,
  brand,
  setBrand,
  size,
  setSize,
}) => {
  const onClearFilters = () => {
    setSortPrice('All');
    setCategory('All');
    setBrand('All');
    setSize('All');
  };

  return (

      <SidebarContainer>

      <SidebarHeader >
        <SidebarInfo>
            <h2>Filters </h2>
            <Button onClick={onClearFilters}>CLEAR ALL</Button>
        </SidebarInfo>
        {/* <CreateIcon /> */}
      </SidebarHeader>
      <SidebarIdealFor>
                <SidebarIdealForHeader>
                    {/* <h4 onClick={handleShowIdealFor}>IDEAL FOR</h4> */}
  
                </SidebarIdealForHeader>
                <PriceFilter>
                  <h4>Price filter</h4>
                  <PriceFilterButtons>
                <Button onClick={() =>setSortPrice('Low to High')}>Low to high</Button>
                <Button onClick={() => setSortPrice("High to Low")}>High to Low</Button>
                </PriceFilterButtons>
                </PriceFilter>
                <GenderFilter>
                  <h4>Gender Filter</h4>
                  <GenderFilterButtons>
                <Button onClick={() => setCategory("All")}>All</Button>    
                <Button onClick={() => setCategory("Men")}>Men</Button>
                <Button onClick={() => setCategory("Women")}>Women</Button>
                </GenderFilterButtons>
                </GenderFilter>
                
            </SidebarIdealFor>

      <Row>
        <Col>Brand :</Col>
        <Col>
          <Form.Control
            as="select"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Flying Machine">Flying Machine</option>
            <option value="Van Heusen">Van Heusen</option>
            <option value="WildCraft">WildCraft</option>
            <option value="London Hills">London Hills</option>
            <option value="Jaffrey">Jaffrey</option>
            <option value="Sara">Sara</option>
            <option value="Addidas">Addidas</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>Size :</Col>
        <Col>
          <Form.Control
            as="select"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="All">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </Form.Control>
        </Col>
      </Row>
      
      </SidebarContainer>
  );
};

export default Sidebar;
const PriceFilter= styled.div`
  display: flex;
  flex-direction: column;

`;

const GenderFilter= styled.div`
  display: flex;
  flex-direction: column;

`;

const PriceFilterButtons = styled.div`
  display: flex;
`;

const GenderFilterButtons = styled.div`
    display: flex;

`;


const SidebarIdealFor = styled.div``;

const SidebarIdealForHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 12px;
    margin-top: -24px;

    > h4{
        cursor: pointer;
    }
`;

const CategoryToggleHeading = styled.div`
    display: flex;
    align-items: center;
`;

const CategoriesList = styled.div`
    
    >h4{
        display: flex;
        justify-content: flex-start;
        padding-left: 40px;
        font-weight: 400;
        cursor: pointer;
    }

    > hr {
        margin: 10px 0;
        border: 1px solid #49274b;
    }
`;

const CategoriesHeader = styled.div`
    /* display:flex; */
    /* flex-direction: column; */
    margin-bottom: -20px;
    text-align: left;
    padding-left: 12px;
    align-items: flex-start;
    cursor: pointer;

`;


const SidebarCategories = styled.div`
    >h4{
        display: flex;
        justify-content: flex-start;
        margin-left: 12px;
    }
`;

const SidebarContainer = styled.div`
    background-color: white;
    color: black;
    flex: 0.3;
    border-top: 1px solid #49274b;
    margin-top: 60px;
    margin-left: 12px;

    > hr {
        margin: 10px 0;
        border: 1px solid #49274b;
    }
    
`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 12px;
    /* justify-content: space-between; */

    > .MuiSvgIcon-root{
        padding: 8px;
        color:#49274b;
        background-color: white;
        border-radius: 50%;
        font-size: 16px ;
    }

`;


const SidebarInfo = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h2{
        font-weight: 800;
        margin-bottom: 5px;
    }
    
    > button{
        background-color: white;
        color:#047BD5;
        font-weight: 800;
        padding-top: 20px;
    }


`;
