import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { profileReducer } from "./profileReducer";

export const rootReducer = combineReducers({
    productR: productReducer,
    authR: authReducer,
    profileR: profileReducer
})