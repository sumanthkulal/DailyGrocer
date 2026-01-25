import React from 'react'
import MainBanner from '../components/MainBanner'
import Catogories from '../components/Catogories'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div className="mt-10">
        <MainBanner/>
        <Catogories/>
        <BestSeller/>
    </div>
  )
}

export default Home