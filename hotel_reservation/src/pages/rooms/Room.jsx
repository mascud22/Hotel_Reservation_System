import React, { useState } from 'react'
import { ArrowLeft, Bathroom, BathroomSolid, Filter, FilterAlt, FilterList, FrameSimple, Medal1st, OrganicFood, Plus, Search, SingleTapGesture, Slash, Sort, TwoPointsCircle, Unjoin3d, User, ViewColumns2, ViewColumns3, X } from 'iconoir-react';
import { ChevronDown, DoorOpen, XIcon } from 'lucide-react';
import Input from '../../components/Ui/Input';
const Room = () => {
  const [filterModal, setFilterModal] = useState(false);
  const [capacityModal, setCapacityModal] = useState(false);
  return (
    <div className='w-full h-full flex flex-col gap-3 p-5 '>
      <div className=' gap-3  w-full flex  items-center   bg-red-200/   h-10 bg-bg-md/ border-b-2/ p-3    border-b-bg-sm  px-2  '>
        <div className='flex xl:flex  hidden   items-center gap-2'>
          <h3>Rooms</h3>
          <button className='btn-sm btn-outline '>17</button>
        </div>
        <div className='w-1 hidden xl:flex  h-6 rounded-full bg-bg-sm/80  '></div>
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
             <div className='w-80 h-fit bg-bg-md  rounded-2xl flex flex-col absolute -right-20 md:left-0 top-11 p-3 gap-4'>
                <div>
                  <h5 className=' '> <FilterList className='icon '/> Organize Filter </h5>
                  <p className=' flex font-medium text-sm  items-center gap-2 border-b-2 border-b-bg-sm/70  pb-3 '> Filter Your Rooms faster and organize </p>
                </div>
                <div className='flex flex-col gap-4'>
                  <h5 className='font-medium ml-2  text-txt-sm '>Room Type</h5>
                  <div className='w-full  h-fit flex flex-col pb-2  gap-1'>
                    <button className='flex-1 hover:scale-101.5   justify-between py-2 '>Single <Medal1st className='icon'/> </button>
                    <button className='flex-1   justify-between py-2 hover:scale-101.5'>Family <ViewColumns2 className='icon'/> </button>
                    <button className='flex-1   justify-between py-2 hover:scale-101.5'>Twins <ViewColumns3 className='icon'/> </button>
                  </div>
                </div>
                {/* Status managment  */}
                <div className='flex flex-col gap-4 md:hidden flex'>
                  <h5 className='font-medium ml-1  text-txt-sm '>Room Status</h5>
                   <div className='flex items-center  '>
                    <button className='rounded-none flex-1 btn-warning rounded-tl-xl rounded-bl-xl hover:scale-99'>Occupied</button>
                    <button className='rounded-none btn-success'>Availiable</button>
                    <button className='rounded-none btn-acc rounded-tr-xl rounded-br-xl '>Maintaince</button>
                  </div>
                </div>
                <button className='btn-warning rounded-xl flex sm:hidden '>
                  <XIcon className='icon-sm    '/> Clear Filters
                  {/* <ChevronDown className='icon-sm ml-3'/> */}
                </button>
             </div>
           )}
         </div>
         {/* this selected filters  */}
         <div className='flex items-center hidden xl:flex opacity-40'>
          <button className='rounded-none rounded-tl-xl rounded-bl-xl hover:scale-99'>Single</button>
          <button className='rounded-none'>2</button>
          <button className='rounded-none rounded-tr-xl rounded-br-xl '>Accupied</button>
         </div>
        {/* we show here status filter */}
         <div className='flex items-center hidden md:flex '>
          <button className='rounded-none btn-warning rounded-tl-xl rounded-bl-xl hover:scale-99'>Occupied</button>
          <button className='rounded-none btn-success'>Availiable</button>
          <button className='rounded-none btn-acc rounded-tr-xl rounded-br-xl '>Maintaince</button>
         </div>
           
         <div className='flex-1  '></div> 
         <button className='btn-warning hidden sm:flex '>
           <XIcon className='icon-sm    '/> Clear Filters
           {/* <ChevronDown className='icon-sm ml-3'/> */}
         </button>
         <button className=''>
           <Sort className='icon-sm  '/> Sorts
           {/* <ChevronDown className='icon-sm ml-3'/> */}
         </button>
      </div>
      {/* now we create the main rooms ui here  */}
      <div className='w-full h-full mt-4   rounded-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  grid-rows-2 gap-3'>
        <div className='bg-bg-md rounded-3xl flex flex-col gap-2 p-3'>
          {/* here we create first a header fo the cards of rooms  */}
          <div className='flex items-center justify-between border-b-2 border-b-bg-sm/30  pb-2'>
            <div className='flex items-center   gap-2 '>
              <DoorOpen strokeWidth={1} className='icon  '/>
              <div className='flex flex-col'>
                <h5 className='font-medium '>Single</h5>
              </div>
            </div>
            <button className='w-fit rounded-lg  btn-sm '>1 Person</button>
          </div>
            {/* we create here an image of rooms  */}
            <div className='w-full aspect-square    rounded-sm bg-bg-sm/50 flex items-center justify-center'>
              <User/>
            </div>
            <div className='w-full px-1'>
              <h5 className='text-danger '>105.6</h5>
            </div>
        </div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
        <div className='bg-bg-md rounded-3xl '></div>
      </div>
    </div>
  )
}

export default Room