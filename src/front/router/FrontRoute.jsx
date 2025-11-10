import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Master from '../layouts/Master'
import HomePage from '../pages/HomePage'

const FrontRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Master />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>

  )
}

export default FrontRoute
