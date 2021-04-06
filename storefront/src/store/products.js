import axios from 'axios';

// let initialState ={
//     productList: [
//         { _id: "5f1a51f01910080017657ed2", name: "1TB USB", category: "electronics", inStock: 963, price: 19.99,},
//         { _id: "5f1a51f01910080017657ed2", name: "PIZZA", category: "food", inStock: 963, price: 15.99,},
//         { _id: "5f1a51f01910080017657ed2", name: "PHONE", category: "electronics", inStock: 963, price: 100,},
//         { _id: "5f1a51f01910080017657ed2", name: "PASTA", category: "food", inStock: 963, price: 11.99,},
//         { _id: "5f1a51f01910080017657ed2", name: "TACOS", category: "food", inStock: 963, price: 15.99,},
//         { _id: "5f1a51f01910080017657ed2", name: "LAPTOP", category: "electronics", inStock: 963, price: 100,},

//     ],
//     activeProduct: '',
    
// }

let initialState = {
    
    productList: [],
    activeProduct: '',
    products: [],
  };

export default function productReducer(state=initialState, action) {
    const { type, payload } = action;

    switch(type){
        case "ACTIVE":
            const products = getProducts(payload.category);
            return {...state, products: products}
        case "LOADING":
            return{
                productList: payload.results,
            }
            default: 
            return state;

        // case "DETAILS":
        //     const record = state.filter( products => products.category === payload.name);
        //     return record;
    }


}

export const getProducts = (category) => {
    const products = initialState.productList;
    const response = products.filter(product => product.category === category);
    return response;
  } 

  export const loadProducts = () => (dispatch, getState) => {
    return axios.get('https://api-js401.herokuapp.com/api/v1/products')
      .then(response => {
        dispatch({
          type: 'LOAD_PRODUCTS',
          payload: response.data
        });
      });
  }
  

//   export const getProduct = (product) => {
//     return {
//       type: "DETAILS",
//       payload: product,
//     }
//   }
  