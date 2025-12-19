import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ManageVendors = () => {
  const {axios} = useAppContext()
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchVendors = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/api/admin/vendors')
      if (data.success) {
        setVendors(data.vendors)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const toggleVendorStatus = async (vendorId, isActive) => {
    try {
      const { data } = await axios.post('/api/admin/update-status', { userId: vendorId, isActive: !isActive })
      if (data.success) {
        toast.success(data.message)
        fetchVendors()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteVendor = async (vendorId) => {
    if (!window.confirm('Are you sure you want to delete this vendor? This will also remove all their cars.')) return
    
    try {
      const { data } = await axios.post('/api/admin/delete', { userId: vendorId })
      if (data.success) {
        toast.success(data.message)
        fetchVendors()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchVendors()
  }, [])

  return (
    <div className='p-6 md:p-10'>
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-gray-900'>Manage Vendors</h1>
        <p className='text-gray-600 mt-2'>View and manage all registered vendors</p>
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
            ) : vendors.length === 0 ? (
              <tr>
                <td colSpan={5} className='px-6 py-4 text-center text-gray-500'>No vendors found</td>
              </tr>
            ) : (
              vendors.map((vendor) => (
                <tr key={vendor._id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      {vendor.image ? (
                        <img src={vendor.image} alt={vendor.name} className='h-10 w-10 rounded-full mr-3' />
                      ) : (
                        <div className='h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3'>
                          <span className='text-green-600 font-semibold'>{vendor.name[0]}</span>
                        </div>
                      )}
                      <span className='font-medium text-gray-900'>{vendor.name}</span>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-600'>{vendor.email}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      vendor.isActive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {vendor.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-600 text-sm'>
                    {new Date(vendor.createdAt).toLocaleDateString()}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center gap-2'>
                      <button
                        onClick={() => toggleVendorStatus(vendor._id, vendor.isActive)}
                        className={`px-3 py-1 rounded text-sm font-medium ${
                          vendor.isActive 
                            ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                            : 'bg-green-100 text-green-600 hover:bg-green-200'
                        }`}
                      >
                        {vendor.isActive ? 'Disable' : 'Enable'}
                      </button>
                      <button
                        onClick={() => deleteVendor(vendor._id)}
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

export default ManageVendors

