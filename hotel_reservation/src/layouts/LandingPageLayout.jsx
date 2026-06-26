import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/landing page com/navbar/Navbar'

const LandingPageLayout = () => {
  return (
    <div className='w-full   h-full  bg-bg  overscroll-y-none  flex flex-col items-center  '>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default LandingPageLayout