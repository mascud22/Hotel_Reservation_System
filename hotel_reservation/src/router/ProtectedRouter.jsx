import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRouter = () => {
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"))
  if(token){
    return <Navigate to={"/login"} />
  }
  return <Outlet/>;
}

export default ProtectedRouter