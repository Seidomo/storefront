import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';
import  { deleteFromCart }from '../../store/cart.js';



import { connect } from 'react-redux';

const useStyles = makeStyles({
    cart: {
      position: 'absolute',
      maxHeight: '200px',
      overflow: 'scroll',
      maxWidth: '200px'
      
    }
  });




const Cart = (props) => {

    const classes = useStyles();
  
return (

 <Card className={classes.cart}  >
    <Paper   evelation={3}>
      <List >
        <ListItem>
          <ListItemText
            primary="CART"
          />
        </ListItem>
        
          {props.cart.map(item => {
            return (
              <ListItem key={item.name}>
                <ListItemText
                  primary={item.name}
                  secondary={item.inCart}
                />
                <ListItemSecondaryAction>
                  <IconButton  color="secondary" edge="end" aria-label="delete">
                  <Button onClick={() => props.deleteFromCart(item)}>x</Button> 
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
       
      </List>
    </Paper>
    </Card>

    //   <Card >
    //     <CardContent className={classes.cart} >
    //         {console.log(props)}
    //       {props.cart.map((product, i) => {
    //         return (
    //           <Typography   key={i}>
    //             ${product.price} : {product.name}
    //           </Typography>
    //         )
    //       })}
    //     </CardContent>
    //   </Card>
    )

}

const mapStateToProps = (data) => {
  return {
    cart: data.cart.cart,
  }
}

const mapDispatchToProps = {
  deleteFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);