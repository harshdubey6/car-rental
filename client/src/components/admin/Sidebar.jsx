import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/users', label: 'Manage Users', icon: '👥' },
    { path: '/admin/vendors', label: 'Manage Vendors', icon: '🏢' },
  ]

  return (
    <div className='w-64 bg-white border-r border-gray-200 min-h-screen'>
      <div className='p-6'>
        <h2 className='text-xl font-bold text-gray-900'>Admin Panel</h2>
      </div>
      <nav className='px-4'>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              location.pathname === item.path
                ? 'bg-purple-100 text-purple-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className='text-xl'>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar

