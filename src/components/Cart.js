import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { products } from '../data/products';
import ProductCartDetail from './ProductCartDetail';

const Cart = ({productIdInCart,setProductIdInCart}) => {
    const prods = products.map((p) => JSON.parse(JSON.stringify(p)));
    const [itemsInCart,setItemsInCart] = useState([]) 
    const [changeItem,setChangeItem] = useState(false)
    const [total,setTotal] = useState(0);
    let item;
    let itemsInCartproxy= []
    for(var j=0;j<productIdInCart.length;j++){
        for(var i=0;i<prods.length;i++){
            if(prods[i].id == productIdInCart[j]){
                item=prods[i];
                itemsInCartproxy.push({...item,QTY:1})
                // setItemsInCart(...setItemsInCart,item)
            }
        }
    }
    // console.log(...itemsInCartproxy)
    console.log("items in cart",itemsInCart)
    
    // console.log("itemsInCart",itemsInCart)
    const increaseItem=(id)=>{
        console.log("increase",id)
        var itm
        var itt = itemsInCart
        for(var i = 0;i<itt.length;i++){
            if(itt[i].id==id){
                itm = itt[i];
                itm.QTY +=1;
                console.log("itm inc",itm)
            }
        }
        // setItemsInCart([...itemsInCart,itm])
        setItemsInCart(itt)
        setChangeItem(true)
        console.log("inc item state",itt)
    }

    const decreaseItem = (id) => {
        console.log("decrease",id)
        console.log("increase",id)
        var itm
        var itt = itemsInCart
        for(var i = 0;i<itt.length;i++){
            if(itt[i].id==id){
                itm = itt[i];
                itm.QTY -=1;
                console.log("itm inc",itm)
            }
        }
        // setItemsInCart([...itemsInCart,itm])
        setItemsInCart(itt)
        setChangeItem(true)
        console.log("inc item state",itt)
    }  
    useEffect(() => {
        // if(productIdInCart.length>0){
            // var amt=0;
            
            
        // }
        setTimeout(()=>{
            setItemsInCart(itemsInCartproxy)
            var amt=0;
            for(var i=0;i<itemsInCart.length;i++){
                amt = itemsInCart[i].QTY * itemsInCart[i].price;

            }
            setTotal(amt);
            console.log("asfasfa",itemsInCart)
        },300 )
        setTimeout(()=>{
            
            var amt=0;
            for(var i=0;i<itemsInCart.length;i++){
                amt = amt + itemsInCart[i].QTY * itemsInCart[i].price;

            }
            setTotal(amt);
            console.log("asfasfa",itemsInCart)
        },500 )
        
    }, [])
    useEffect(()=>{
        setChangeItem(false)
        var amt=0;
            for(var i=0;i<itemsInCart.length;i++){
                amt = itemsInCart[i].QTY * itemsInCart[i].price;

            }setTotal(amt);
    },[changeItem])
    return (
        <MainComponent>
            <ProductListLeft >
                {total}
                {   itemsInCart ? 
                    itemsInCart.map(item => <ProductCartDetail itemObj={item} increaseItem={increaseItem} decreaseItem={decreaseItem}/>)
                : <p>not found</p>
                }
            </ProductListLeft>
            <CartCheckoutBillRight>
                <CheckoutHeader>
                    PRICE DETAILS
                </CheckoutHeader>
                
                <CheckOutDetails>
                    <PriceDetail>
                        <div className="price">
                            Price ({itemsInCart.length} items)
                        </div>
                        <div className="priceBefdisc">
                            Rs {total}
                        </div>
                    </PriceDetail>
                    <Discount>
                        <div className="disc">
                            Discount
                        </div>
                        <div className="discAmount">
                            10%
                        </div>
                    </Discount>
                    <DeliveryCharges>
                        <div className="del">
                            Delivery charges
                        </div>
                        <div className="delCharge">
                            FREE
                        </div>
                    </DeliveryCharges>
                </CheckOutDetails>
                <CheckOutTotal>
                    <div className="totalAmt">
                    Total amount
                    </div>
                    <div>
                        {total - total*0.1}
                    </div>
                    
                </CheckOutTotal>
                <CheckOutMeta>

                </CheckOutMeta>
            </CartCheckoutBillRight>
        </MainComponent>
        
    )
}

export default Cart;


const MainComponent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;

`

const ProductListLeft = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid pink;
    flex: 0.65;
`

const CartCheckoutBillRight = styled.div`
    display: flex;
    border: 1px solid blue;
    flex: 0.35;
    color:black;
    flex-direction:column ;
    height: 300px;
`
const CheckoutHeader = styled.div`
    background-color: #aeaeae;
    display: flex;
    height: 2rem;
    padding-top: 10px;
`

const CheckOutDetails = styled.div`
    display: flex;
    flex-direction: column;
`

const PriceDetail = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
`

const Discount = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
`

const DeliveryCharges = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
`

const CheckOutTotal = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
`
const CheckOutMeta = styled.div`
`
