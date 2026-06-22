import React from 'react'
import {formatDate } from '../../utils/dateHelpers/formatDate'
import { calculateNights } from '../../utils/dateHelpers/calculateNight'
import { getToday } from '../../utils/dateHelpers/getToday'

const Dashboard = () => {
  const newDate = new Date()
  const checkIn = "2026-1-23"
  const checkOut = "2026-3-23"
  const auto = () => {
    return "yeah"
  }

  auto
  return (
    <div className='w-full h-full flex flex-col gap-3 p-5 '>
      <h3>Dashboard</h3>
    </div>
  )
}

export default Dashboard