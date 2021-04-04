import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
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
      <Typography variant="h2" component="h2">Products</Typography>
      {console.log(props)}
      <Grid container justify="center" spacing={5}>
        {props.products.productList.map(product => {
          return (
            <Grid item>
              <Card>
                <CardHeader title={product.name} />
                
                <CardContent>
                  <Typography variant="p" component="p">Details</Typography>
                  <Typography variant="p" component="p">price</Typography>
                </CardContent>
                <CardActions>
                  <IconButton> ADD TO CART</IconButton>
                  <IconButton> SHOW DETAILS</IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      
    </>
  )
}

// we need to create a function that tells redux how to attach store data to our components

const mapStateToProps = (state) => {
  return {
    products: state.products,
    
  }
}

const mapDispatchToProps = {
  getProducts,
  initialize,
  activated
}

// connect() returns a function that consumes a React Component
export default connect(mapStateToProps, mapDispatchToProps)(Products);