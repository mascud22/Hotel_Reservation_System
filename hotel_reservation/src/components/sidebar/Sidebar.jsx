import React from 'react'
import {BeanIcon, BombIcon, ChevronDown, ChevronUp, DoorClosed, Hotel, House, Key, LockIcon, LogOut, MapIcon, MehIcon, SidebarClose, TagIcon, TentIcon, Trash} from "lucide-react"
import { Link } from 'react-router-dom'
import { CardReader, DashboardDots, KeyBack, Mastodon, PageFlip, PeopleTag, SafeOpen, SidebarCollapse, StatsReport, Walking } from 'iconoir-react'
const Sidebar = () => {
  return (
    <div className='w-76   border-r-3 border-r-bg-md  h-212 flex flex-col bg-bg-md/40'>
        {/* the header of sidebar like logo and name */}
        <div className='w-full h-fit p-3  bg-bg-md/50  border-b-2/ border-b-bg-sm  flex items-center gap-3 justify-between'>
          <div className='flex items-center gap-2'>
            <button className='btn-lg px-4 scale-80 py-3.5 btn-outline'>
              <Mastodon strokeWidth={2  }  className='text-inv size-8 '/>
            </button>
            <h4 className=' text-txt font-bold '>Hayat Hotel</h4>
          </div>
          <button className='px-2 border-0 btn-outline '>
            <SidebarCollapse  strokeWidth={1.5 } className='icon-lg '/>
          </button>
        </div> 
        {/* now lets go for navigations  */}
        <div className='w-full h-fit flex flex-col gap-2 p-2 '> 
          <p className=' ml-4 font-medium'>Navigations</p>
          <div className='flex flex-col gap-1 '>
            <button className='btn-outline border-none '>
              <DashboardDots className='icon text-txt'/> 
              <span className='font-bold '>Dashboard</span>
              <div className='flex-1'></div>
              <button className='btn-sm btn-icon  btn-outline '>58</button>
            </button>
            <Link className='block' to={"/rooms"}>
              <button className='btn-outline border-none w-full'>
                <SafeOpen className='icon text-txt-sm'/> 
                <span className='text-txt-md'>Rooms</span>
                <div className='flex-1'></div>
                <button className='btn-sm btn-icon  btn-outline '>4</button>
              </button>
            </Link>
            <button className='btn-outline border-none'>
              <PeopleTag className='icon text-txt-sm'/> 
              <span className='text-txt-md'>Customers</span>
              <div className='flex-1'></div>
              <button className='btn-sm btn-icon  btn-outline '>2</button>
            </button>
            <Link className='block' to={"/reservations"}>
              <button className='btn-outline w-full border-none'>
                <PageFlip className='icon text-txt-sm'/> 
                <span className='text-txt-md'>Reservation</span>
                <div className='flex-1'></div>
                <button className='btn-sm btn-icon  btn-outline '>4</button>
              </button>
            </Link>
            <button className='btn-outline border-none'>
              <CardReader className='icon text-txt-sm'/> 
              <span className='text-txt-md'>Payments</span>
              <div className='flex-1'></div>
              {/* <button className='btn-sm btn-icon  btn-outline '>6</button> */}
            </button>
          </div>
        <p className='my-2 ml-4 font-medium border-t-2 border-t-bg-md mt-3 pt-3'>Tools</p>
            <button className='btn-outline border-none'>
              <Walking className='icon text-txt-sm'/> 
              <span className='text-txt-md'>Log Out</span>
              <div className='flex-1'></div>
              {/* <button className='btn-sm btn-icon  btn-outline '>6</button> */}
            </button>
            <button className='btn-outline border-none'>
              <KeyBack className='icon text-txt-sm'/> 
              <span className='text-txt-md'>Change Password</span>
              <div className='flex-1'></div>
              {/* <button className='btn-sm btn-icon  btn-outline '>6</button> */}
            </button>
        </div>
        {/* so now we have to show the avatar icon for user imag */}
        <div className='h-full'></div>
        <div className='w-full h-fit p-3 flex items-center gap-2 justify-between'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center size-11 rounded-full bg-bg-md'></div>
            <div className='flex flex-col'>
              <span>McTomminay</span>
              <p className=' truncate w-30 text-sm'>McTomminay123@gmail.com</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <ChevronUp className='icon'/>
            <ChevronDown className='icon '/>
          </div>
        </div>
    </div>
  )
}

export default Sidebar