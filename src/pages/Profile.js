import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import secureLocalStorage from 'react-secure-storage'
import { fetchProfile } from '../redux/actions/profileAction'

export default function Profile() {
    const dispatch = useDispatch()
	const {profile} = useSelector(state => state.profileR)

    useEffect(() => {
        const auth = secureLocalStorage.getItem("kiki")
        dispatch(fetchProfile(auth ? auth.access_token : ""))
        .then(res => {
            console.log(profile)
        })
    }, [])

  return (
    <main>
        <h1>{profile && profile.email}</h1>
        <h2>{profile && profile.name}</h2>
    </main>
  )
}
