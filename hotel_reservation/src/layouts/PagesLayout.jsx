import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'

const PagesLayout = () => {
  return (
    <div className="w-full  overflow-hidden h-fit overscroll-y-none flex items-start bg-bg ">
        <Sidebar/>
        <div className='w-full h-212    bg-bg-md/45'>
          <Outlet/>
        </div>
    </div>
  )
}

export default PagesLayout