import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'

const Master = () => {
  return (
    <>
      <Navbar/>
      <div className='main'>
        <Outlet/>
      </div>
    </>
  )
}

export default Master
