import React from 'react'
import Hero from '../../components/landing page com/Hero'
import RoomCategories from '../../components/landing page com/RoomCategories'
import HowItWorks from '../../components/landing page com/HowItWorks.jsx'
import WhyChooseUs from '../../components/landing page com/WhyChooseUs.jsx'
import Line from '../../components/landing page com/Line.jsx'
import SpecialOffers from '../../components/landing page com/SpecialOffer.jsx'
import FAQ from '../../components/landing page com/FAQ.jsx'

const Home = () => {
  return (
    <div className='w-full h-fit flex items-center justify-center flex-col'>
        <Hero/>
        <RoomCategories/>
        <HowItWorks/>
        <WhyChooseUs/>
        <SpecialOffers/>
        <FAQ/>
    </div>
  )
}

export default Home