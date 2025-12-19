import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

const NavbarAdmin = () => {
  const { user, logout } = useAppContext()
  const navigate = useNavigate()

  return (
    <nav className='bg-white border-b border-gray-200 px-6 py-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Admin Panel</h1>
        </div>
        <div className='flex items-center gap-4'>
          {user && (
            <div className='flex items-center gap-3'>
              {user.image ? (
                <img src={user.image} alt={user.name} className='h-10 w-10 rounded-full' />
              ) : (
                <div className='h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center'>
                  <span className='text-purple-600 font-semibold'>{user.name[0]}</span>
                </div>
              )}
              <div>
                <p className='text-sm font-medium text-gray-900'>{user.name}</p>
                <p className='text-xs text-gray-500'>Admin</p>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              logout()
              navigate('/')
            }}
            className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium'
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarAdmin

