let initialState = {
    cart: [],
   
   
};


export default function cartReducer( state = initialState, action){

    let { type, payload } = action;
    

    switch(type){
        case 'ADD_CART':
        return {...state.cart, cart: [...state.cart, payload]};
        case 'DELETE_ITEM':
            let temp = [...state.cart];
      let deleteOneItem = true;
      let updatedCart = temp.filter((item) => {
        if (item === payload && deleteOneItem){
          deleteOneItem = false;
            return false;
        }else{
            return true;
        }
    })
        return {...state, cart: [...updatedCart]}
        default:
            return state;
    }

}

export function addToCart(name){
   
    return{
        type: 'ADD_CART',
        payload: name,
    }
}

export function deleteFromCart(name) {
    return {
      type: 'DELETE_ITEM',
      payload: name,
    }
  }