import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { connect } from 'react-redux'; // this ensures that we are connected to our redux store

// import directly from the store directory.
import { initialize, activated } from '../../store/categories.js';
import { getProducts, loadProducts} from '../../store/products.js';
import  { addToCart }from '../../store/cart.js';
import { useEffect } from 'react';




const Products = (props) => {
  useEffect(() => {
    props.loadProducts();
  }, []);
console.log('props', props);
  return (
    <>
      {/* <Typography variant="h4" component="h4">Products</Typography> */}
      {/* <Button onClick={ () => props.activated('electronics')} >ELETRONICS</Button>
      <Button onClick={ () => props.activated('food')} >FOOD</Button> */}
      
        
      {/* <Button  >CART</Button>  */}
      {console.log(props)}
      <Grid container justify="center" spacing={5}>
        {props.products.productList.map((product, i)=> {
          console.log(product.category, props.activatedCategory);
           if (product.category === props.activatedCategory) {
          return (
            <Grid item key={i}>
              <Card>
                <CardHeader title={product.name} />
                
                <CardContent>
                  {/* <Typography variant="p" component="p">Details</Typography> */}
                  <Typography  component="p">price: ${product.price}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton onClick= {() => props.addToCart(product)}> ADD TO CART</IconButton>
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
    activatedCategory: state.category.activatedCategory,
    activatedDescription: state.description,
    
  }
}

const mapDispatchToProps = {
  getProducts,
  initialize,
  activated,
  addToCart,
  loadProducts,
}

// connect() returns a function that consumes a React Component
export default connect(mapStateToProps, mapDispatchToProps)(Products);
