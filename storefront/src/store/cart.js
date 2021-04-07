let initialState = {
    cart: [],
   
};


export default function cartReducer( state = initialState, action){
    let {type, payload} = action;
    // console.log(type);

    switch(type){
        case 'ADD_CART':
        return {...state.cart, payload};
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