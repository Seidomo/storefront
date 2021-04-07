import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer  from './cart.js';
import categoryReducer from './categories.js';
import productReducer from './products.js'


const reducers = combineReducers({ category: categoryReducer, products: productReducer, cart: cartReducer }); // you'll want to add this and add other reducers to this line.

const ourStore = () => {
  return createStore(reducers, composeWithDevTools()); // we pass our reducer(s), and middlewares.
}

export default ourStore;
