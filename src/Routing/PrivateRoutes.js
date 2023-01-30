import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  return (
    <div>
      {
        localStorage.getItem('token')? <Outlet />:<Navigate to='/' />
      }
      
      
    </div>
  )
}

export default PrivateRoutes