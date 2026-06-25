import React, { useState } from 'react'
import { ArrowLeft, Bathroom, BathroomSolid, Filter, FilterAlt, FilterList, OrganicFood, Plus, Search, Slash, Sort, X } from 'iconoir-react';
import { ChevronDown, DoorOpen, XIcon } from 'lucide-react';
import Input from '../../components/Ui/Input';
const Room = () => {
  const [filterModal, setFilterModal] = useState(false);
  return (
    <div className='w-full h-full flex flex-col gap-3 p-5 '>
      <div className=' gap-3  w-full flex  items-center   bg-red-200/   h-10 bg-bg-md/ border-b-2/ p-3    border-b-bg-sm  px-2  '>
        <div className='flex hidden lg:flex md:flex sm:flex  items-center gap-2'>
          <h3>Rooms</h3>
          <button className='btn-sm btn-outline '>17</button>
        </div>
        <div className='w-1 hidden sm:flex  h-6 rounded-full bg-bg-sm/80  '></div>
        <div className='md:w-50 w-38     '>
          <Input leftIcon={<Search className='icon'/>}
           placeHolder="Room Num"
           type="text"
           rightIcon={
            <button className='btn-sm px-1  rounded-lg '><Slash className='icon'/></button>
           }/>
        </div>
         <div className='w-fit relative'>
           <button onClick={() => setFilterModal(!filterModal)} className=''>
             <Plus className='icon  '/> Filters
             {/* <ChevronDown className='icon-sm ml-3'/> */}
           </button>
           {/* here we create the filer dropdown modal  */}
           {filterModal && (
             <div className='w-80 h-80 bg-bg-md  rounded-2xl flex flex-col absolute -right-20 md:left-0 top-11 p-3 gap-4'>
                <span className=' flex font-medium  items-center gap-2 border-b-2 border-b-bg-sm/70  pb-3 '> <FilterList className='icon '/> Organize Filter </span>
                <div className='w-full h-fit flex items-start gap-3 flex-col'>
                  <span className='font-medium '>Room Type </span>
                  <button className='w-full bg-transparent border-none '>Single</button>
                  <button className='w-full bg-transparent border-none '>Family</button>
                  <button className='w-full bg-transparent border-none '>Twin</button>
                </div>
             </div>
           )}
         </div>
         <div className='flex items-center hidden opacity-40'>
          <button className='rounded-none rounded-tl-xl rounded-bl-xl hover:scale-99'>Single</button>
          <button className='rounded-none'>2</button>
          <button className='rounded-none rounded-tr-xl rounded-br-xl '>Accupied</button>
         </div>
         <div className='flex-1  '></div> 
         <button className='btn-warning hidden'>
           <XIcon className='icon-sm    '/> Clear Filters
           {/* <ChevronDown className='icon-sm ml-3'/> */}
         </button>
         <button className=''>
           <Sort className='icon-sm  '/> Sorts
           {/* <ChevronDown className='icon-sm ml-3'/> */}
         </button>
      </div>
    </div>
  )
}

export default Room