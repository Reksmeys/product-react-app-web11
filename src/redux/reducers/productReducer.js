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
        case actionTypes.FETCH_PRODUCT_BY_CATEGORY:
            return{...state, products: payload}
        default: 
        return state
    }
}