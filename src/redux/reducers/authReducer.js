import { act } from "react-dom/test-utils"
import { actionTypes } from "../actions/actionTypes"

const initialState = {
    isLogin: false,
    auth: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN_SUCESS: 
        return{ 
            ...state, 
            isLogin: true,
            auth: action.payload
         }
        case actionTypes.LOGIN_FAILED:
            return{
                ...state,
                isLogin: false,
                auth: null
            }
        default: 
        return state
    }
}