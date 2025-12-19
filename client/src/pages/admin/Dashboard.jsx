import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AdminDashboard = () => {
  const {axios, currency} = useAppContext()

  const [data, setData] = useState({
    totalUsers: 0,
    totalVendors: 0,
    totalCars: 0,
    totalBookings: 0,
    activeUsers: 0,
    activeVendors: 0,
    recentUsers: [],
    recentVendors: [],
    recentBookings: []
  })

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard')
      if (data.success) {
        setData(data.dashboardData)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const statsCards = [
    { title: "Total Users", value: data.totalUsers, color: "blue", icon: "👥" },
    { title: "Total Vendors", value: data.totalVendors, color: "green", icon: "🏢" },
    { title: "Total Cars", value: data.totalCars, color: "purple", icon: "🚗" },
    { title: "Total Bookings", value: data.totalBookings, color: "orange", icon: "📋" },
    { title: "Active Users", value: data.activeUsers, color: "blue", icon: "✅" },
    { title: "Active Vendors", value: data.activeVendors, color: "green", icon: "✅" },
  ]

  return (
    <div className='p-6 md:p-10'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900'>Admin Dashboard</h1>
        <p className='text-gray-600 mt-2'>Monitor and manage the entire platform</p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        {statsCards.map((card, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-600 text-sm'>{card.title}</p>
                <p className='text-3xl font-bold text-gray-900 mt-2'>{card.value}</p>
              </div>
              <div className='text-4xl'>{card.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Recent Users */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <h2 className='text-xl font-semibold mb-4'>Recent Users</h2>
          <div className='space-y-3'>
            {data.recentUsers.map((user, index) => (
              <div key={index} className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                <div>
                  <p className='font-medium'>{user.name}</p>
                  <p className='text-sm text-gray-500'>{user.email}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${user.isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {user.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Vendors */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <h2 className='text-xl font-semibold mb-4'>Recent Vendors</h2>
          <div className='space-y-3'>
            {data.recentVendors.map((vendor, index) => (
              <div key={index} className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                <div>
                  <p className='font-medium'>{vendor.name}</p>
                  <p className='text-sm text-gray-500'>{vendor.email}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${vendor.isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {vendor.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Bookings */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <h2 className='text-xl font-semibold mb-4'>Recent Bookings</h2>
          <div className='space-y-3'>
            {data.recentBookings.map((booking, index) => (
              <div key={index} className='p-3 bg-gray-50 rounded-lg'>
                <p className='font-medium text-sm'>{booking.car?.brand} {booking.car?.model}</p>
                <p className='text-xs text-gray-500 mt-1'>{booking.user?.name}</p>
                <div className='flex items-center justify-between mt-2'>
                  <span className='text-sm font-semibold'>{currency}{booking.price}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-600' :
                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

