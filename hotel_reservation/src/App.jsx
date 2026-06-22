import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ProtectedRouter from './router/ProtectedRouter'
import PagesLayout from './layouts/PagesLayout'
import Room from './pages/rooms/Room'
import Payment from './pages/payments/Payment'
import Reservation from './pages/reservations/Reservation'
import Customers from './pages/customers/Customers'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    
      <Routes>
        {/* puplic routes */}
        <Route element={<AuthLayout/>} >
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
        {/* // protected routes  */}
        <Route element={<ProtectedRouter/>}>
          <Route element={<PagesLayout/>}>
            <Route path='/rooms' element={<Room/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/payments' element={<Payment/>}/>
            <Route path='/reservations' element={<Reservation/>}/>
            <Route path='/' element={<Dashboard/>}/>
          </Route>
        </Route>
      </Routes>
  )
}

export default App