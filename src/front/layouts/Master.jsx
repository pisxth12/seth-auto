import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'
import Footer from './Footer'

const Master = () => {
  return (
    <>
      <Navbar/>
      <div className='main'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Master
