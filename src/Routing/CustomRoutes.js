import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Users from '../Components/Users/Users'
import PrivateRoutes from './PrivateRoutes'
import RistrictedRoutes from './RistrictedRoutes'

const CustomRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RistrictedRoutes />}>
          <Route index element={<Login />} />
        </Route>

        <Route path='/' element={<PrivateRoutes />}>
          <Route path='users' element={<Users />} />
        </Route>

        {/* <Route path='/' element={<Login />} />
        <Route path='/users' element={<Users />} /> */}
      </Routes>

    </div>
  )
}

export default CustomRoutes