import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux'; // this ensures that we are connected to our redux store

// import directly from the store directory.
import { initialize, activated } from '../../store/categories.js';
import { getProducts} from '../../store/products.js';
const Products = (props) => {
  return (
    <>
      <Typography variant="h3" component="h3">Products</Typography>
      <Button onClick={ () => props.activated('electronics')} >ELETRONICS</Button>
      <Button onClick={ () => props.activated('food')} >FOOD</Button>
      {console.log(props)}
      <Grid container justify="center" spacing={5}>
        {props.products.productList.map((product, index )=> {
           if (product.category === props.activatedCategory) {
          return (
            <Grid item key={index}>
              <Card>
                <CardHeader title={product.name} />
                
                <CardContent>
                  {/* <Typography variant="p" component="p">Details</Typography> */}
                  <Typography variant="p" component="p">price: ${product.price}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton> ADD TO CART</IconButton>
                  <IconButton> SHOW DETAILS</IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
           }else{
             return null;
           }
        })}
      </Grid>
      
    </>
  )
}

// we need to create a function that tells redux how to attach store data to our components

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activatedCategory: state.category.activatedCategory
  }
}

const mapDispatchToProps = {
  getProducts,
  initialize,
  activated
}

// connect() returns a function that consumes a React Component
export default connect(mapStateToProps, mapDispatchToProps)(Products);
