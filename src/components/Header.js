import React from 'react'
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search"
import { Button } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <span>Flipkart</span>
            </HeaderLeft>

            <HeaderMiddle>
                <input type="text" placeholder="Search Products" />
                <SearchIcon />
            </HeaderMiddle>

            <HeaderRight>
                <Button id="login-btn">Login</Button>
                <Button id="more-btn">More <KeyboardArrowDownIcon /> </Button>
                <Button id="cart-btn"><ShoppingCartIcon />Cart</Button>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	justify-content: space-between;
	background-color: #047BD5;
	align-items: baseline;
	padding: 10px 0;
	color:white;
	width: 100%;

`;

const HeaderLeft = styled.div`
	display: flex;
	flex:0.3;
	align-items: center;
	justify-content: flex-end;
	margin-right: 20px;

	> span{
        padding-top: 4px;
        font-size: 27px;
        font-weight: 400;
    }

`;

const HeaderMiddle = styled.div`
	flex:0.4;
	opacity:1;
	border-radius: 2px;
	border: 1px solid grey;
	text-align:center;
	background-color: white;
	display: flex;
	padding:0 50px;
	color: grey; 

	>input{
		background-color: transparent;
		border: none;
		text-align:center;
		min-width: 30vw ;
		outline: 0;
		color: white;
        height: 40px;
	}
    > .MuiSvgIcon-root{
        margin: auto 0;
        color:#047BD5;
        font-size:32px;
    }
`;

const HeaderRight = styled.div`
	flex:0.3;
	display: flex;
	justify-content: space-evenly;

	/* > .MuiSvgIcon-root{
		margin-left: auto;
		margin-right: 20px;
	} */

    > #login-btn{
        color: #047BD5;
        background-color: white;
        width: 30px;
        height:16px;
        padding: 16px 12px;
    }

    > #more-btn{
        color: white;
        background-color: transparent;
    }

    > #cart-btn{
        color: white;
        background-color: transparent;    }
`;