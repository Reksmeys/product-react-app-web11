import axios from "axios"
import { BASE_URL } from "../constants/API"
import { actionTypes } from "./actionTypes"

export const fetchUser = () => {
    return (dispatch) => {
        return axios(`${BASE_URL}users`, {
			headers: {
                "Content-Type": "application/json"
            }
		})
        .then((res) => {
            if (res.status == 200){
                dispatch({
                    type: actionTypes.FETCH_USER,
                    payload: res.data,
                })
                return Promise.resolve()
            }
            
        })
        .catch(er => {
            console.log("err", er)
            alert(er.message)
        })
    }
}