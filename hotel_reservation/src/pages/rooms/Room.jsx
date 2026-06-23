import React from 'react'
import { ArrowLeft, Bathroom, BathroomSolid } from 'iconoir-react';
import { DoorOpen } from 'lucide-react';
const Room = () => {
  return (
    <div className='w-full h-full flex flex-col gap-3 p-5 '>
      <h3>
        <button className='btn-outline px-2.5  py-2 '> <DoorOpen className='icon  '/> </button>
        <div className='bg-bg-sm rounded-full w-1.5 h-5.5 mr-8 '></div>
        Rooms
        <button className=' text-sm  font-semibold btn-icon size-7  acc btn-sm btn-acc rounded-[12px]'>64</button>
      </h3>
    </div>
  )
}

export default Room