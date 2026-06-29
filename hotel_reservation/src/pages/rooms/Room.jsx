import React, { useState } from 'react'
import { ArrowLeft, Bathroom, BathroomSolid, Filter, FilterAlt, FilterList, FrameSimple, Medal1st, OrganicFood, Plus, Search, SingleTapGesture, Slash, Sort, Trash, TwoPointsCircle, Unjoin3d, User, ViewColumns2, ViewColumns3, X } from 'iconoir-react';
import { ChevronDown, DoorOpen, XIcon } from 'lucide-react';
import Input from '../../components/Ui/Input';
const Room = () => {
  const [filterModal, setFilterModal] = useState(false);
  const [capacityModal, setCapacityModal] = useState(false);

  const rooms = [
  {
    roomType: "Deluxe",
    price: 120,
    source: "Google",
    status: "Available",
    beds: 2,
    view: "Sea View",
  },
  {
    roomType: "Standard",
    price: 80,
    source: "Booking",
    status: "Occupied",
    beds: 1,
    view: "City View",
  },
  {
    roomType: "Suite",
    price: 200,
    source: "Airbnb",
    status: "Available",
    beds: 3,
    view: "Ocean View",
  },
];
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
       <div className='w-full p-3 '>
      <table className='table-auto  w-full'>
        <thead className=' text-left  border-b-2 border-b-bg-sm text-txt  '>
          <tr className=''>
            <th className='py-3'>Room Type</th>
            <th>Price</th>
            <th>Source</th>
            <th>Status</th>
            <th>Beds</th>
            <th>View</th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room, index) => (
            <tr className='border-b-2 border-b-bg-md text-txt-sm' key={index}>
              <td className='py-3 '>{room.roomType}</td>
              <td>
                <button className='btn-icon btn-success  '> <Trash className='icon-sm '/>  </button>
              </td>
              <td>{room.source}</td>
              <td>{room.status}</td>
              <td>
                <button className='btn-sm'>{room.beds}</button>
              </td>
              <td>
                <button className='btn-sm'>{room.view}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Room