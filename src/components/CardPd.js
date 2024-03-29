import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 600,
    width: 400
  },
  cartBtn:{
    backgroundColor:blue,
  }
});

export default function CardPD({items, cart,setCart}) {
  const classes = useStyles();
  const cartBtnStyle={
    backgroundColor:blue
  }

  const handleAddToCart = (id) => {
    console.log(id)
    var cartProxy = cart;
    if(cartProxy.includes(id)){

    }
    else{
      cartProxy.push(id)
      setCart(cartProxy)
    }
    console.log(cartProxy);

    console.log(cart);
    console.log()
    
  }

  return (
    items.map((item) => {
      return (
          <CardComp>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.imageUrl}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.brand}
          </Typography>
          
          <Typography>
            {item.price}
          </Typography>
          <Typography>
            {item.size}
          </Typography>
          <Button className={classes.cartBtn} onClick={()=>handleAddToCart(item.id)}>Add to Cart</Button>
        </CardContent>
      </CardActionArea>
      
    </Card></CardComp>)
    })
    
  );
}

const CardComp = styled.div`
    margin: 30px;
    padding-top: 30px;
`;