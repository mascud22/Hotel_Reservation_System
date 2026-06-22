import React from 'react'
import { Bathroom, BathroomSolid } from 'iconoir-react';
const Room = () => {
  return (
    <div className='w-full h-full flex flex-col gap-3 p-5 '>
      <h3>Rooms <BathroomSolid className='icon'/> </h3>
    </div>
  )
}

export default Room