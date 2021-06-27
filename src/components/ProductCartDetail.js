import React from 'react'
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
      width: 400,
      objectFit:"contain",
    },
    cartBtn:{
      backgroundColor:blue,
    }
  });
const ProductCartDetail = ({itemObj,increaseItem,decreaseItem}) => {
    console.log("itemObj",itemObj)
    const classes = useStyles();
    const cartBtnStyle={
    backgroundColor:blue
    }
    return (
        
              <CardComp>
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={itemObj.imageUrl}
              title={itemObj.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {itemObj.brand}
              </Typography>
              
              <Typography>
                {/* {itemObj.price} */}
              </Typography>
              <Typography>
                {/* {itemObj.size} */}
              </Typography>
              <Button onClick={()=>decreaseItem(itemObj.id)}>-</Button>
              <Button>{itemObj.QTY}</Button>
              <Button onClick={()=>increaseItem(itemObj.id)}>+</Button>
            </CardContent>
          </CardActionArea>
          
        </Card></CardComp>
        )
        
        // <div>
        //     {/* {console.log(itemObj)}
        //     {itemObj.forEach(itemObj => <p>hwllo</p>)} */}
        //     hello
        // </div> 
       
        
    //   );
}

export default ProductCartDetail

const CardComp = styled.div`
    margin: 30px;
    padding-top: 30px;
`;