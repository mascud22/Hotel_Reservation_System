import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingAuthLayout = () => {
  return (
    <div className='w-full h-212 bg-bg'>
        <Outlet/>
    </div>
  )
}

export default LandingAuthLayout