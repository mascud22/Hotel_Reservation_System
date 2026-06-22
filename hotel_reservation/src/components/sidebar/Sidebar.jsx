import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <aside className="w-64 h-screen bg-sidebar text-white p-6 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Hotel Manager</h1>
      </div>
      
      <nav className="space-y-4">
        <Link 
          to="/" 
          className={`block px-4 py-2 rounded transition ${
            isActive('/') ? 'bg-primary text-white' : 'hover:bg-gray-700'
          }`}
        >
          Dashboard
        </Link>
        <Link 
          to="/rooms" 
          className={`block px-4 py-2 rounded transition ${
            isActive('/rooms') ? 'bg-primary text-white' : 'hover:bg-gray-700'
          }`}
        >
          Rooms
        </Link>
        <Link 
          to="/customers" 
          className={`block px-4 py-2 rounded transition ${
            isActive('/customers') ? 'bg-primary text-white' : 'hover:bg-gray-700'
          }`}
        >
          Customers
        </Link>
        <Link 
          to="/reservations" 
          className={`block px-4 py-2 rounded transition ${
            isActive('/reservations') ? 'bg-primary text-white' : 'hover:bg-gray-700'
          }`}
        >
          Reservations
        </Link>
        <Link 
          to="/payments" 
          className={`block px-4 py-2 rounded transition ${
            isActive('/payments') ? 'bg-primary text-white' : 'hover:bg-gray-700'
          }`}
        >
          Payments
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
