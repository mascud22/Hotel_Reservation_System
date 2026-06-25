import React from 'react'
import Input from '../../components/Ui/Input'
import { Plus, Search, Slash, Sort } from 'iconoir-react'

const Reservation = () => {
  return (
    <div className='w-full h-full flex flex-col gap-3 p-5 '>
      <div className=' gap-3 w-full flex items-center   bg-red-200/   h-10 bg-bg-md/ border-b-2/ p-3    border-b-bg-sm  px-2  '>
        <div className='w-50 '>
          <Input leftIcon={<Search className='icon'/>}
           placeHolder="Room Num"
           type="number"
           rightIcon={
            <button className='btn-sm px-1  rounded-lg '><Slash className='icon'/></button>
           }/>
        </div>
         <button className=''>
           <Plus className='icon  '/> Filters
           {/* <ChevronDown className='icon-sm ml-3'/> */}
         </button>
         <div className='flex-1 '></div>
         <button className=''>
           <Sort className='icon-sm  '/> Sorts
           {/* <ChevronDown className='icon-sm ml-3'/> */}
         </button>
      </div>
    </div>
  )
}

export default Reservation