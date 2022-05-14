//ReactRouter 6
import {Navigate, Outlet} from 'react-router-dom'
import { UseAuthStatus } from '../hooks/UseAuthStatus'
import React from 'react'
import Spinner from './Spinner'

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = UseAuthStatus()

    if(checkingStatus) {
        return <Spinner />
    }

  return (
    loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
  )
}

export default PrivateRoute