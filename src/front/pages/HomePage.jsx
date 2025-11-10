import React from 'react'
import HomeSlider from '../components/HomeSlider'
import SpecialOffer from '../components/SpecialOffer'
import NewArrival from '../components/NewArrival'
import PopularCategories from '../components/PopularCategories'
import ProductShowcase from '../components/ProductShowcase'
import Accessories from '../components/Accessories'
const HomePage = () => {
  return (
    <div>
      <HomeSlider/>
      <SpecialOffer/>
      <NewArrival/>
      <PopularCategories/>
      <ProductShowcase/>
      <Accessories/>
    </div>
  )
}

export default HomePage
