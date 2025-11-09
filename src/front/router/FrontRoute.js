import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Master from '../layouts/Master'

const FrontRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Master />} />

    </Routes>
  )
}

export default FrontRoute
