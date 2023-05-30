import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import secureLocalStorage from 'react-secure-storage'
import { fetchProfile } from '../redux/actions/profileAction'

export default function Profile(props) {
    const dispatch = useDispatch()
	const {profile} = useSelector(state => state.profileR)
	
    useEffect(() => {
        const auth = secureLocalStorage.getItem("kiki")
        dispatch(fetchProfile(auth ? auth.access_token : ""))
        .then(res => {
            console.log(props.profile)
        })
    }, [])

  return (
    <div>
        {
            console.log(profile)
        
        }</div>
  )
}
