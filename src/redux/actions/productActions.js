import { BASE_URL } from "../constants/API"
import { actionTypes } from "./actionTypes"

export const fetchProducts = (offset, limit) => {
    return (dispatch) => {
        fetch(`${BASE_URL}products?offset=${offset}&limit=${limit}`)
        .then(res => res.json())
        .then(response => dispatch({
            type: actionTypes.FETCH_PRODUCTS,
            payload: response
        }))
    }
}