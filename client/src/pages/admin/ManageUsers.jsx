import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ManageUsers = () => {
  const {axios} = useAppContext()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/api/admin/users')
      if (data.success) {
        setUsers(data.users)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const toggleUserStatus = async (userId, isActive) => {
    try {
      const { data } = await axios.post('/api/admin/update-status', { userId, isActive: !isActive })
      if (data.success) {
        toast.success(data.message)
        fetchUsers()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return
    
    try {
      const { data } = await axios.post('/api/admin/delete', { userId })
      if (data.success) {
        toast.success(data.message)
        fetchUsers()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className='p-6 md:p-10'>
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-gray-900'>Manage Users</h1>
        <p className='text-gray-600 mt-2'>View and manage all registered users</p>
      </div>

      <div className='bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Email</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Status</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Joined</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {loading ? (
              <tr>
                <td colSpan={5} className='px-6 py-4 text-center text-gray-500'>Loading...</td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={5} className='px-6 py-4 text-center text-gray-500'>No users found</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      {user.image ? (
                        <img src={user.image} alt={user.name} className='h-10 w-10 rounded-full mr-3' />
                      ) : (
                        <div className='h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3'>
                          <span className='text-blue-600 font-semibold'>{user.name[0]}</span>
                        </div>
                      )}
                      <span className='font-medium text-gray-900'>{user.name}</span>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-600'>{user.email}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-600 text-sm'>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center gap-2'>
                      <button
                        onClick={() => toggleUserStatus(user._id, user.isActive)}
                        className={`px-3 py-1 rounded text-sm font-medium ${
                          user.isActive 
                            ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                            : 'bg-green-100 text-green-600 hover:bg-green-200'
                        }`}
                      >
                        {user.isActive ? 'Disable' : 'Enable'}
                      </button>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className='px-3 py-1 rounded text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200'
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageUsers

