import React from 'react';
import Button from '@material-ui/core/Button';
import { initialize, activated } from '../../store/categories.js';
import { getProducts} from '../../store/products.js';


import { connect } from 'react-redux';


 function Category(props) {
    // const classes = useStyles();
    return (
      <>
    <Button onClick={ () => props.activated('electronics')} >ELETRONICS</Button>
      <Button onClick={ () => props.activated('food')} >FOOD</Button>
      </>
    )
}


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
  export default connect(mapStateToProps, mapDispatchToProps)(Category);
  
  