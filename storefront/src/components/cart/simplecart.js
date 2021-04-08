import React from 'react';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';



import { connect } from 'react-redux';

const useStyles = makeStyles({
    cart: {
      position: 'absolute',
      maxHeight: '100px',
      overflow: 'scroll',
     
    }
  });




const Cart = (props) => {

    const classes = useStyles();
  
return (

    <div>
    <Paper  className={classes.cart} evelation={3}>
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
                    
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
       
      </List>
    </Paper>
  </div>

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

export default connect(mapStateToProps)(Cart);