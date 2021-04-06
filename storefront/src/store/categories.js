let initialState = {
    categories : [
        { name: "food", description: "food stuff"},
        { name: "eletronics", description: "eletronicall stuff"}
    ],

    activatedCategory: '',
    activatedDescription: ''

}


export default function categoryReducer(state = initialState, action) {
    let { type, payload } = action;
  
    switch(type){
        
        case 'INITIAL':
          return initialState;

        case "ACTIVE":
            return {...state, activatedCategory: payload.category, activatedDescription: payload.description}
            default:
                return state
    }
    }
  
    export const initialize = () => {
        return {
          type: 'INITIAL',
        }
      }

      export const activated = (category, description) => {
        return {
          type: "ACTIVE",
          payload: {
            category,
            description
          }
          };
      };