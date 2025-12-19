import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import Sidebar from '../../components/admin/Sidebar'
import NavbarAdmin from '../../components/admin/NavbarAdmin'

const AdminLayout = () => {
  const {isAdmin, navigate} = useAppContext()

  useEffect(()=>{
    if(!isAdmin){
      navigate('/')
    }
  },[isAdmin, navigate])
  
  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <NavbarAdmin />
      <div className='flex flex-1'>
        <Sidebar />
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout

