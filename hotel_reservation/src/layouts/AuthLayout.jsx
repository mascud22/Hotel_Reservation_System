import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='w-full h-screen bg-bg justify-center items-center gap-2 flex flex-col'>
        <Outlet/>
    </div>
  )
}

export default AuthLayout