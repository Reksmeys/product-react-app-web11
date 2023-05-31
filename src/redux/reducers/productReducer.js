import { actionTypes } from "../actions/actionTypes"
// in reducer, we need to check action and state
const initialState = {
    products: []
}
export const productReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case actionTypes.FETCH_PRODUCTS: 
        return{ ...state, products: state.products.concat(payload) }
        default: 
        return state
    }
}